import React from "react";

interface ChatBannerProps {
  chatName: string;
  membersList: string[];
}

const ChatBanner: React.FC<ChatBannerProps> = ({ chatName, membersList }) => {
  return (
    <div className="flex w-full p-4 items-center border border-r-gray-200 border-b-2">
      <div className="flex gap-3 items-center">
        <div className="rounded-full bg-red-500 p-6"></div>
        <div className="flex flex-col">
          <span className="font-bold">{chatName}</span>
          <span className="text-gray-300">Members, Members, Members</span>
        </div>
      </div>
    </div>
  );
};

export default ChatBanner;
