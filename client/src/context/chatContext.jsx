import { createContext, useContext, useState } from "react";
import { getConversaciones } from "../api/chat";

const ChatContext = createContext();

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export function ChatProvider({ children }) {
  const [chats, setChats] = useState([]);

  const getChats = async (userID) => {
    try {
      const res = await getConversaciones(userID);
      setChats(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ChatContext.Provider
      value={{
        chats,
        getChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
