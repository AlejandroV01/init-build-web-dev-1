import React from "react";

interface ChatBannerProps {
  chatName: string;
  membersList: string[];
}

const ChatBanner: React.FC<ChatBannerProps> = ({ chatName, membersList }) => {
  const members = membersList.join(", ");
  return (
    <div className="flex w-full p-4 items-center border border-secondary/15 border-b-2 h-full">
      <div className="flex gap-3 items-center">
        <img
          src={`https://api.dicebear.com/8.x/icons/svg?seed=${chatName}`}
          alt="avatar"
          className="h-12  rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold">{chatName}</span>
          <span className="text-gray-300">{members}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatBanner;
