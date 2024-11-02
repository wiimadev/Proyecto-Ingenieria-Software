import React from "react";

import { format, register } from "timeago.js";

register('es_ES', (number, index, total_sec) => [
  ['justo ahora', 'ahora mismo'],
  ['hace %s segundos', 'en %s segundos'],
  ['hace 1 minuto', 'en 1 minuto'],
  ['hace %s minutos', 'en %s minutos'],
  ['hace 1 hora', 'en 1 hora'],
  ['hace %s horas', 'in %s horas'],
  ['hace 1 dia', 'en 1 dia'],
  ['hace %s dias', 'en %s dias'],
  ['hace 1 semana', 'en 1 semana'],
  ['hace %s semanas', 'en %s semanas'],
  ['1 mes', 'en 1 mes'],
  ['hace %s meses', 'en %s meses'],
  ['hace 1 año', 'en 1 año'],
  ['hace %s años', 'en %s años']
][index]);

function Message({message, own}) {

  if (!message) {
    return null;
  }
  return (
      <div className='flex flex-col'>
        <div className="flex items-end w-full">
          <img
            className="w-10 h-10 rounded-full object-cove mr-3 border"
            src={message?.profilePicture ? "/assets/person/noAvatar.png" : "/assets/person/noAvatar.png"}
            alt=""
          />
          <p className={own ? "max-w-md p-3 rounded-xl text-white bg-blue-800 overflow-y-auto overflow-x-hidden whitespace-normal break-words" : 
          "max-w-md p-3 rounded-xl text-white bg-slate-600 overflow-y-auto overflow-x-hidden  break-words"}>
            {message.text}
          </p>
        </div>
        <div className="mb-5 ml-14 text-slate-500">{format(message.create_at,'es_ES')}</div>
      </div>
  );
}

export default Message;




