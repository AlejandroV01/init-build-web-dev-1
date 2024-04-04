import { ChangeEvent } from "react";

interface TextAreaProps {
  value: string;
  name?: string;
  id?: string;
  rows?: number;
  resizable?: boolean;
  placeholder?: string;
  className?: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  required,
  value,
  name,
  id,
  rows = 3,
  resizable = false,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <textarea
      value={value}
      name={name}
      id={id}
      rows={rows}
      placeholder={placeholder}
      required={required}
      style={{ resize: resizable ? "both" : "none" }}
      className={`block w-64 rounded-md border-0 py-1.5 px-2.5 text-gray-900 dark:text-white bg-transparent shadow-md ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:outline-none  focus:ring-blue-500 sm:text-sm sm:leading-6 ${className}`}
      onChange={onChange}
    />
  );
};

export default TextArea;
