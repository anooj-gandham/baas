import React, { useRef, useState } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import { v4 as uuidv4 } from 'uuid';
import sampleChats from "./SampleChats";
import "./Chatbot.css";

const Chatbot = () => {
  const inputRef = useRef();
  const [msgInputValue, setMsgInputValue] = useState("");
  const [messages, setMessages] = useState(sampleChats);
  const incomingAvatar = "/static/images/batman.png";
  const outgoingAvatar = "/static/images/user.png";


  const handleSend = (message) => {
    console.log(message);
    setMessages([...messages, {
      id: uuidv4(),
      sender: "me",
      message,
      direction: 'outgoing'
    },
    {
      id: uuidv4(),
      sender: "bot",
      message: "I'm sorry, I don't understand your question " + message + ". Please try again.",
      direction: 'incoming'
    }
    ]);

    setMsgInputValue("");
    inputRef.current.focus();
    console.log(messages);

  };


  return <div style={{
    height: "100%",
  }}>

    <ChatContainer className="chat-container">


      <MessageList
      // scrollBehavior="smooth"
      // typingIndicator={<TypingIndicator content="Emily is typing" />}
      >

        {messages.map((message) => (
          <div className={`message-container message-container-${message.direction}`}>
            <Message
              className="message"
              model={message}
              key={message.id}
            // avatarSpacer
            >
              <Avatar
                src={
                  message.direction === "incoming" ? incomingAvatar : outgoingAvatar
                }
                name={message.sender} />
            </Message>
          </div>
        ))}

      </MessageList>

      <MessageInput
        placeholder="Type message here"
        onSend={handleSend}
        onChange={setMsgInputValue}
        value={msgInputValue}
        ref={inputRef} />

    </ChatContainer>

  </div>;
}

export default Chatbot;