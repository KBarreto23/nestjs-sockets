import React, { useState, useEffect, useCallback } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import io from 'socket.io-client';
import { Chat, defaultTheme } from '@flyerhq/react-native-chat-ui';
import { launchImageLibrary } from 'react-native-image-picker';
import { useWebSockets } from '../../hook';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.floor(Math.random() * 16);
    const v = c === 'x' ? r : (r % 4) + 8;
    return v.toString(16);
  });
};

export default Chats = () => {
  const { send } = useWebSockets({ userId: 1, enabled: true, onConnected });
  const [messages, setMessages] = useState([
    {
      author: { id: '06c33e8b-e835-4736-80f4-63f44b66666' },
      createdAt: Date.now(),
      id: uuidv4(),
      text: 'hola',
      type: 'text',
    },
  ]);
  const onConnected = () => {
    console.log('ffff');
  };
  const user = { id: '06c33e8b-e835-4736-80f4-63f44b66666c' };
  const [socketio, setsocket] = useState();
  const socket = io('http://localhost:3000');

  const addMessage = message => {
    setMessages([message, ...messages]);
  };

  useEffect(() => {
    socket.on('message', data => {
      setMessages([data, ...messages]);
    });
    return () => {};
  }, []);

  const handleSubmitNewMessage = () => {
    socket.emit('message', { data: 'message.value', userId: '1' });
    console.log(socket.connected);
  };

  const handleSendPress = message => {
    const textMessage = {
      author: user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: 'text',
    };
    send(message.text, textMessage.id);
    addMessage(textMessage);
  };

  const handleImageSelection = () => {
    launchImageLibrary(
      {
        includeBase64: true,
        maxWidth: 1440,
        mediaType: 'photo',
        quality: 0.7,
      },
      ({ assets }) => {
        const response = assets?.[0];

        if (response?.base64) {
          const imageMessage = {
            author: user,
            createdAt: Date.now(),
            height: response.height,
            id: uuidv4(),
            name: response.fileName ?? response.uri?.split('/').pop() ?? '🖼',
            size: response.fileSize ?? 0,
            type: 'image',
            uri: `data:image/*;base64,${response.base64}`,
            width: response.width,
          };
          addMessage(imageMessage);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <Chat
        theme={{
          ...defaultTheme,
          borders: { inputBorderRadius: 30, messageBorderRadius: 30 },
          colors: { ...defaultTheme.colors, inputBackground: '#002851' },
        }}
        showUserNames
        messages={messages}
        onSendPress={handleSendPress}
        user={user}
        onAttachmentPress={handleImageSelection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
