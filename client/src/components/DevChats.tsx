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

const DevChats = () => {
  const user = useAppSelector((state) => state.auth);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [ideaTitles, setIdeaTitles] = useState<string[]>([]);
  const [roomId, setRoomId] = useState<string>("default");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessageCreate[]>([]);
  const [ideas, setIdeas] = useState<IIdeaProfileAcceptedView[]>([]);

  useEffect(() => {
    const addApplicant = async () => {};
    const fetchData = async () => {
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

    const fetchMessages = async () => {
      try {
        const data = await fetchMessageByIdeaId(roomId);
        if (data === null) {
          console.error("Error fetching data");
          return;
        } else {
          console.log(data);
          setMessages(data);
        }
      } catch {}
    };
    fetchMessages();
    fetchData();
  }, [roomId]);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    newSocket?.emit("join-room", roomId);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleChatSelect = (idea: IIdeaProfileAcceptedView) => {
    setRoomId(idea.idea_id);
    setSelectedChat(idea.idea_title);
  };

  const sendMessage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // Send the message to the server with the room ID
    e.preventDefault();
    console.log(roomId);

    const newMessage: IMessageCreate = {
      profile_id: user.profile_id,
      idea_id: roomId,
      text: message,
    };
    await insertMessageByProfileId(newMessage);

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    socket.emit("message", { roomId, message });
    setMessage("");
  };

  console.log(messages);

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
            lastMessage="Example last message" // You can set this dynamically if needed
            isSelected={selectedChat === idea.idea_title}
            onClickCard={() => handleChatSelect(idea)}
          />
        ))}
      </div>
      <div className="flex flex-col items-center w-[80%]">
        <ChatBanner
          chatName={selectedChat || "N/A"}
          membersList={["Members", "Members", "Members"]}
        />
        <div className="flex flex-col w-full items-center h-full">
          <div className="h-[85%]">
            {messages.map((message: IMessageCreate, index: number) => (
              <Message
                message={message.text}
                author_id={message.profile_id}
                key={index}
              />
            ))}
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
