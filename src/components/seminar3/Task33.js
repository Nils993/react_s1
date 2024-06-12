import { messages } from "../seminar3/data.js";
import Massage from "./Massage.js";
export default function MessagesList({ Theme }) {
  return (
    <div>
      <ul>
        {messages.map((message) => (
          //   <Massage
          //     key={message.id}
          //     text={message.text}
          //     time={message.time}
          //     author={message.author}
          //  идентично записи ниже   />
          <Massage themeColor={Theme} key={message.id} {...message} />
        ))}
      </ul>
    </div>
  );
}
