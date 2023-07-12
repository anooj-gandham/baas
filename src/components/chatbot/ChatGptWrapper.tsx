import React from "react";
import Chat from "./pages/chat/Chat";
import './Chatbot.css';
import StateManagerProps from "../data/StateManager";

interface ChatbotProps {
    stateManager: StateManagerProps | undefined;
}

const Chatbot: React.FC<ChatbotProps> = ({ stateManager }) => {
    return (
        <div className="chat-container">
            <Chat stateManager={stateManager} />
        </div>
    );
};

export default Chatbot;
