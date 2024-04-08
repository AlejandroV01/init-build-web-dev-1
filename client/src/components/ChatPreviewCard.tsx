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
        <div className="rounded-full bg-red-500 p-6"></div>
        <div className="flex flex-col justify-between">
          <span className="font-bold">{title}</span>
          <span className="font-light text-secondary text-sm">
            {lastMessage}
          </span>
        </div>
      </div>
      <div className="h-[2px] bg-gray-200 rounded-lg"></div>
    </div>
  );
};

export default ChatPreviewCard;
