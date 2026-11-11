import { RiSendInsFill } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";

type ChatInputProps = {
  loading: boolean;
  onSend: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  valueInput: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

function ChatInput({
  loading,
  onSend,
  onKeyDown,
  valueInput,
  setValue,
}: ChatInputProps) {
  return (
   
    <div className="flex justify-center items-center">
        {/* input sec */}
        <div className="flex items-center p-2 rounded-3xl bg-gray-200 dark:bg-(--primary) border border-(--mid-gray) w-80 md:w-100 lg:w-150">
          <span className="px-2 text-2xl text-(--light-gray) cursor-pointer">
            <TiPlus />
          </span>
          <input
            type="text"
            placeholder="Message Nexus .."
            className="border-0 outline-0 p-2 w-full"
            value={valueInput}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button
            className="px-2 text-2xl text-(--light-gray) cursor-pointer"
            onClick={onSend}
            disabled={loading}
          >
            <RiSendInsFill />
          </button>
        </div>
      </div>
   
  );
}

export default ChatInput;
