

interface Props {
  children: string;
  onclick: () => void;
}

const Button = ({ children, onclick }: Props) => {
    return (
        
        <button
          className="px-4 py-2 bg-pink-700 text-white text-bold rounded hover:bg-pink-400 focus:outline-none focus:right-2 focus:ring-pink-500 ml-4 mt-4"
          onClick={onclick}
        >
          {children}
        </button>
    );
};

export default Button;
