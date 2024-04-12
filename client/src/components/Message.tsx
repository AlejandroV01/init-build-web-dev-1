import React, { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import Avatar from "./Avatar";
import fetchProfileByID from "@/database/profiles/fetchProfileByID";

interface IMessage {
  message: string;
  author_id: number;
  created_at?: string;
}

const Message = ({ message, author_id, created_at }: IMessage) => {
  const user = useAppSelector((state) => state.auth);

  const [first_name, setFirstName] = React.useState<string>("");
  const [last_name, setLastName] = React.useState<string>("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchProfileByID(author_id);
        if (data !== null) {
          setFirstName(data.first_name);
          setLastName(data.last_name);
          return;
        } else {
          return;
        }
      } catch {}
    };
    fetch();
  }, []);

  if (author_id !== user.profile_id) {
    return (
      <div className="flex flex-col">
        <div className="text-left w-full flex justify-start items-center gap-2 mb-2">
          <Avatar firstName={first_name} lastName={last_name} size={48} />
          <div className="max-w-[50%] bg-gray-300 rounded p-1.5  text-black flex flex-col gap-1 justify-center">
            {message}
            <span className="text-[10px] text-gray-500">{created_at}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <div className="text-left w-full flex justify-end items-center gap-2 mb-2">
          <div className="max-w-[50%] bg-primary rounded p-1.5 text-white flex items-end flex-col gap-1 ">
            <div className="w-full flex items-start">{message}</div>
            <span className="text-[10px] text-gray-300 w-full flex items-end">
              {created_at}
            </span>
          </div>
          <Avatar
            firstName={user.first_name}
            lastName={user.last_name}
            size={40}
          />
        </div>
      </div>
    );
  }
};

export default Message;
