import { RiSendInsFill } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";

function ChatUI() {
  return (
    <section>
      <div className="">
        {/* sidebar */}
        <div className=""></div>
        {/* container message and input */}
        <div className="">
          <h2>Hi, what can I help you with?</h2>
          <div className="flex justify-center items-center">
            <div className="flex items-center">
              <span>
                <TiPlus />
              </span>
              <input type="text" placeholder="Message Nexus .."/>
              <span>
                <RiSendInsFill />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatUI;
