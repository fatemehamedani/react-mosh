import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="relative p-4 shadow text-lg bg-pink-200 text-black font-bold">
      {children}
      <button className="absolute top-2 right-2 text-gray-600 hover:text-black focus:outline-none" aria-label="Close" onClick={onClose}>&times;</button>
    </div>
  );
};

export default Alert;
