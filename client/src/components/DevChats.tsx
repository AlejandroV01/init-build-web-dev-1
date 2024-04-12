import React, { useEffect } from "react";
import ChatPreviewCard from "./ChatPreviewCard";
import ChatBanner from "./ChatBanner";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { io, Socket } from "socket.io-client";
import fetchAcceptedIdeasByProfileId from "@/database/profile_ideas_view/fetchAcceptedIdeasByProfileId";
import { useAppSelector } from "@/store/hooks";
import fetchMessageByIdeaId from "@/database/messages/fetchMessageByIdeaId";
import insertMessageByProfileId from "@/database/messages/insertMessageByProfileId.ts";
import { IIdeaProfileAcceptedView } from "@/types";
import { IMessageCreate } from "@/types";
import Message from "./Message";
import fetchIdeaByIdeaId from "@/database/ideas/fetchIdeaByIdeaId";
import { profile } from "console";
import { useSearchParams } from "react-router-dom";

const DevChats = () => {
  const user = useAppSelector((state) => state.auth);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [members, setMembers] = useState<string[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [roomId, setRoomId] = useState<string>("default");
  const [message, setMessage] = useState<string>("");
  const [lastMessage, setLastName] = useState<string>("");
  const [messages, setMessages] = useState<IMessageCreate[]>([]);
  const [ideas, setIdeas] = useState<IIdeaProfileAcceptedView[]>([]);
  const [queryParameters] = useSearchParams();

  queryParameters.get("idea_id");
  console.log(queryParameters.get("idea_id"));

  const fetchMessages = async (new_room: string) => {
    try {
      // alert(`roomId: ${new_room}`);
      const data = await fetchMessageByIdeaId(new_room);
      if (data === null) {
        console.error("Error fetching data");
        return;
      } else {
        console.log(data);
        setMessages(data);
      }
    } catch {}
  };

  // creating initial socket and fetching accepted chats
  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    const fetchAcceptedIdeas = async () => {
      try {
        const profile_id = user.profile_id;

        if (profile_id !== null) {
          const data = await fetchAcceptedIdeasByProfileId(profile_id);

          if (data !== null) {
            // @ts-expect-error supabase wants JSON but we know its array
            setIdeas(data);
          } else {
            console.error("Error fetching data");

            return;
          }
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAcceptedIdeas();
  }, []);

  //retrieving emitted message from backend
  useEffect(() => {
    socket?.on("messaging-room", async (data) => {
      if (roomId != "default") {
        // alert("Starting to insert!");
        // alert(newMessage.text);
        setMessages((prevMessages) => [...prevMessages, data]);
        console.log(data);
        console.log("I should fetch messages");
      }

      // alert(`Fetching messages ${roomId}`);
      await fetchMessages(roomId);
      console.log("Data on the frontend: " + data);
    });

    return () => {
      socket?.off("connect");
      socket?.off("disconnect");
      socket?.off("messaging-room");
    };
  }, [socket, roomId]);

  //fetching db messages when new message is added to messages[] state
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await fetchMessageByIdeaId(roomId);
        if (data === null) {
          console.error("Error fetching data");
          return;
        } else {
          console.log(data);
        }
      } catch {}
    };
    if (roomId != "default") {
      fetchMessages();
    }
  }, [messages]);

  //emit new message
  const sendMessage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    socket?.emit(
      "send-message",
      JSON.stringify({ message: message, roomId: roomId })
    );

    if (user.profile_id == null) {
      return;
    }

    const newMessage: IMessageCreate = {
      profile_id: user.profile_id,
      idea_id: roomId,
      text: message,
    };

    await insertMessageByProfileId(newMessage);
    e.preventDefault();
  };

  const handleChatSelect = (idea: IIdeaProfileAcceptedView) => {
    setRoomId(idea.idea_id);
    setSelectedChat(idea.idea_title);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center bg-white h-[85vh] my-3 mx-16 rounded-md drop-shadow-lg">
      <div className="bg-white-400 w-[20%] bg-white flex flex-col p-6 gap-6 border border-r-gray-200 border-r-2">
        <span className="flex gap-[0.35rem]">
          {/* theres a better way to do this but i couldnt be asked at 1AM, sorry :( */}
          <h1 className="text-2xl font-extrabold ">Your</h1>
          <h1 className=" text-2xl font-extrabold text-primary">DevChats</h1>
        </span>

        {ideas.map((idea: IIdeaProfileAcceptedView, index: number) => (
          <ChatPreviewCard
            key={index}
            title={idea.idea_title}
            lastMessage={lastMessage} // You can set this dynamically if needed
            isSelected={selectedChat === idea.idea_title}
            onClickCard={() => {
              handleChatSelect(idea);

              socket?.emit(
                "joinRoom",
                JSON.stringify({
                  roomId: idea.idea_id,
                  userName: user.first_name,
                })
              );

              if (idea.idea_id != "default") {
                fetchMessages(idea.idea_id);
              }
            }}
          />
        ))}
      </div>
      <div className="flex flex-col items-center w-[80%] h-full">
        <ChatBanner
          chatName={selectedChat || "N/A"}
          membersList={ideas.map(
            (idea: IIdeaProfileAcceptedView, index: number) =>
              index === ideas.length - 1
                ? idea.profile_first_name + " " + idea.profile_last_name
                : idea.profile_first_name + " " + idea.profile_last_name + ", "
          )}
        />
        <div className="flex flex-col w-full items-center h-[530px] over">
          <div className="h-[85%] w-full p-4 flex flex-col gap-2 overflow-auto">
            {messages.map((message: IMessageCreate, index: number) => {
              // Parse the created_at timestamp string
              const createdAtDate = new Date(message.created_at);

              // Format the date in the desired format
              const formattedDate = `${createdAtDate.toLocaleString("en-US", {
                month: "long",
                day: "numeric",
              })}, ${createdAtDate.toLocaleString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}`;

              return (
                <Message
                  message={message.text}
                  author_id={message.profile_id}
                  created_at={formattedDate}
                  key={index}
                />
              );
            })}
          </div>
          <div className="w-full h-[15%] bg-gray-200 p-5">
            <form
              className="flex items-center justify-center h-full gap-3"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="h-10 w-full bg-white rounded-md p-2 drop-shadow-md"
                onChange={handleMessageChange}
              ></input>
              <button type="submit" onClick={sendMessage}>
                <IoSend size={28} className="drop-shadow-md text-primary" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevChats;
