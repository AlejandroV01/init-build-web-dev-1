import React from "react";
import { useState } from "react";

interface ChatPreviewCardProps {
  title: string;
  lastMessage: string;
  onClick?: () => void;
  isSelected: boolean;
  onClickCard: () => void;
}

const ChatPreviewCard: React.FC<ChatPreviewCardProps> = ({
  title,
  lastMessage,
  onClickCard,
  isSelected,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(isSelected);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the clicked state
    // onSelect(); // Notify the parent about the selection change
    // onClick && onClick(); // Call the onClick prop if provided
  };

  return (
    <div className="flex flex-col gap-4 cursor-pointer" onClick={handleClick}>
      <div
        className={`flex w-full gap-3 p-3 rounded-lg ${
          isSelected ? "bg-gray-200" : "bg-white"
        }`}
        onClick={onClickCard}
      >
        <img
          src={`https://api.dicebear.com/8.x/icons/svg?seed=${title}`}
          alt="avatar"
          className="h-12  rounded-full"
        />

        <div className="flex flex-col justify-center">
          <span className="font-bold over truncate w-full">{title}</span>
          {/* <span className="font-light text-secondary text-sm truncate w-[80%]">
            {lastMessage}
          </span> */}
        </div>
      </div>
      <div className="h-[2px] bg-gray-200 rounded-lg"></div>
    </div>
  );
};

export default ChatPreviewCard;
