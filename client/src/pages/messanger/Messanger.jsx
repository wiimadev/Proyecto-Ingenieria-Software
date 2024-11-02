import React, { useEffect, useState, useRef } from "react";
import Conversations from "../../components/chat/Conversations";
import Message from "../../components/chat/Message";

import { getMessages, postMessages, getConversaciones } from "../../api/chat";

function Messanger() {
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  const scrollRef = useRef();

  // const [currentChat, setCurrentChat] = useState(null);
  // const [messages, setMessages] = useState([]);

  const id = "20181008711";

  useEffect(() => {
    async function fetchData() {
      const res = await getConversaciones(id);
      setConversation(res.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const getMSJ = async () => {
      try {
        const msj = await getMessages(currentChat?.ConversacionID);

        console.log(msj.data);
        setMessages(msj.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMSJ();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: id,
      text: newMessage,
      conversation_id: currentChat.ConversacionID,
    };

    // const receiverId = currentChat.members.find(
    //   (member) => member !== user._id
    // );

    // socket.current.emit("sendMessage", {
    //   senderId: user._id,
    //   receiverId,
    //   text: newMessage,
    // });

    try {
      await postMessages(message);
      const msj = await getMessages(currentChat?.ConversacionID);

      console.log(msj.data);
      setMessages(msj.data);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="h-8 bg-blue-800 -mt-2 mb-2 mx-1"></div>
      <div className="flex h-[calc(90vh-50px)] w-full bg-white">
        <div className="flex w-1/4 border-r-2 border-slate-300 text-black overflow-y-scroll">
          <div className="p-3 h-full w-full bg-slate-50">
            <input
              className="w-full mb-2 border-b border-black p-1"
              placeholder="buscar amigos"
              type="text"
            />
            {conversation.map((c) => (
              <div key={c.ConversacionID} onClick={() => setCurrentChat(c)}>
                <Conversations conversation={c} currentUser={id} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-3/5 bg-white text-black border-r-2 border-slate-300">
          <div className="p-10 h-full w-full bg-white">
            {currentChat ? (
              <>
                <div className="h-[32rem] overflow-y-scroll">
                  {messages.map((m) => (
                    <div key={m.menssage_id} ref={scrollRef}>
                      <Message message={m} own={m.sender === id} />
                    </div>
                  ))}
                </div>
                <div className="p-1 border border-gray-400 rounded-md shadow-lg shadow-gray-400/50">
                  <div className="flex w-full items-center h-11">
                    <textarea
                      className="h-11 w-4/5 flex-grow py-2 px-4 focus:outline-none resize-y"
                      placeholder="Escribe un mensaje..."
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                    ></textarea>
                    <button
                      className="h-11 bg-blue-800 text-white rounded-r-md px-4 py-2 hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-600"
                      onClick={handleSubmit}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <span>Abre una conversacion</span>
            )}
          </div>
        </div>
        <div className="flex w-1/5 bg-white  text-black">
          <div className="p-10 h-full w-full bg-white">online</div>
        </div>
      </div>
    </>
  );
}

export default Messanger;
