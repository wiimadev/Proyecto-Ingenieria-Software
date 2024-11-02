import React, { useState, useEffect } from 'react'

function Conversations({ conversation, currentUser}) {
  const [user, setUser] = useState("Fernando");

  const PF = "http://localhost:5173/images/"

  const nombre = {
    20181008711 :  "Wilson Ivan Mayorga Monge",
    20191009712 :"Jose Fernando Mayorga Portillo",
    20201006710 : "Dylan Javier Mayorga Chavez",
  }

  const img = {
    20181008711 :  "",
    20191009712 :"",
    20201006710 : "",
  }

  useEffect(() => {
  
    const friendId = conversation.Miembros.find((m) => m !== currentUser);

    const getUser = async () => {
     
      setUser(nombre[friendId]);
    };
    getUser();
  }, [currentUser, conversation]);


  return (
    <div className='flex w-full items-center p-2.5 cursor-pointer hover:bg-slate-300 hover:shadow-xl rounded-lg'>
        <img className='h-10 w-10 rounded-full object-cover mr-3 border' src={ user?.profilePicture
            ? PF + user.profilePicture
            : "/assets/person/noAvatar.png" } alt="" />
        <span className='font-normal'>{user}</span>
    </div>
  )
}

export default Conversations