import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const useWebSockets = ({ userId, enabled, onConnected }) => {
  const ref = useRef();
  const [messages, setMessages] = useState([]);

  const send = (msg, senderId) => {
    console.log('ffffffffff');
    ref.current.emit('chat message', 'sss');
  };

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const socket = io();

    socket.emit('message', userId);

    socket.emit('message', msg => {
      setMessages(prev => prev.concat(msg));
    });

    socket.on('connect', () => {
      console.log('ccccc');
      if (onConnected) {
        onConnected();
      }
    });

    socket.on('reconnect', () => {
      socket.emit('joinRoom', userId);
    });

    ref.current = socket;
  }, [enabled, userId]);

  return {
    send,
    messages,
  };
};
export default useWebSockets;
