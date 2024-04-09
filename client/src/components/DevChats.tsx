import React, { useEffect } from "react";
import ChatPreviewCard from "./ChatPreviewCard";
import ChatBanner from "./ChatBanner";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { io, Socket } from "socket.io-client";
import fetchAcceptedIdeasByProfileId from "@/database/profile_ideas_view/fetchAcceptedIdeasByProfileId";
import { useAppSelector } from "@/store/hooks";

const DevChats = () => {
  const user = useAppSelector((state) => state.auth);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [ideaTitles, setIdeaTitles] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile_id = user.profile_id;
        const data = await fetchAcceptedIdeasByProfileId(profile_id.toString());

        if (data) {
          const titles: string[] = data.map((idea: any) => idea.idea_title);
          setIdeaTitles(titles);
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleChatSelect = (title: string) => {
    setSelectedChat(title);
  };

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-center bg-white h-[85vh] my-3 mx-16 rounded-md drop-shadow-lg">
      <div className="bg-white-400 w-[20%] bg-white flex flex-col p-6 gap-6 border border-r-gray-200 border-r-2">
        <span className="flex gap-[0.35rem]">
          {" "}
          {/* theres a better way to do this but i couldnt be asked at 1AM, sorry :( */}
          <h1 className="text-2xl font-extrabold ">Your</h1>
          <h1 className=" text-2xl font-extrabold text-primary">DevChats</h1>
        </span>

        {ideaTitles.map((ideaTitle: string, index: number) => (
          <ChatPreviewCard
            key={index}
            title={ideaTitle}
            lastMessage="daojdowjo" // You can set this dynamically if needed
            isSelected={selectedChat === ideaTitle}
            onClickCard={() => handleChatSelect(ideaTitle)}
          />
        ))}
      </div>
      <div className="flex flex-col items-center w-[80%]">
        <ChatBanner
          chatName={selectedChat || "N/A"}
          membersList={["Members", "Members", "Members"]}
        />
        <div className="flex flex-col w-full items-center h-full">
          <div className="h-[85%]">Chat Content</div>
          <div className="w-full h-[15%] bg-gray-200 p-5">
            <form className="flex items-center justify-center h-full gap-3">
              <input
                type="text"
                className="h-10 w-full bg-white rounded-md p-2 drop-shadow-md"
              ></input>
              <button type="submit">
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
