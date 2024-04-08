import React from "react";
import ChatPreviewCard from "./ChatPreviewCard";
import ChatBanner from "./ChatBanner";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

const DevChats = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const handleChatSelect = (title: string) => {
    setSelectedChat(title);
  };

  return (
    <div className="flex justify-center bg-white h-[85vh] my-3 mx-16 rounded-md drop-shadow-lg">
      <div className="bg-white-400 w-[20%] bg-white flex flex-col p-6 gap-6 border border-r-gray-200 border-r-2">
        <span className="flex gap-[0.35rem]">
          {" "}
          {/* theres a better way to do this but i couldnt be asked at 1AM, sorry :( */}
          <h1 className="text-2xl font-extrabold ">Your</h1>
          <h1 className=" text-2xl font-extrabold text-primary">DevChats</h1>
        </span>

        <ChatPreviewCard
          title="Chat1"
          lastMessage="daojdowjo"
          isSelected={selectedChat === "Chat1"}
          onClickCard={() => handleChatSelect("Chat1")}
        />
        <ChatPreviewCard
          title="Chat2"
          lastMessage="daojdowjo"
          isSelected={selectedChat === "Chat2"}
          onClickCard={() => handleChatSelect("Chat2")}
        />
        <ChatPreviewCard
          title="Chat3"
          lastMessage="daojdowjo"
          isSelected={selectedChat === "Chat3"}
          onClickCard={() => handleChatSelect("Chat3")}
        />
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
