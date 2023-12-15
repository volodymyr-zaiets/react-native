import { View } from "react-native";

import defaultStyles from './styles';
import ChatBoard from "@app/components/Chat/ChatBoard/ChatBoard";
import ChatControlPanel from "@app/components/Chat/ChatControlPanel/ChatControlPanel";
import { Message } from "@app/components/interfaces/Message";
import { User } from "@app/components/interfaces/user.";
import { useState } from "react";

function Chat() {
  const styles = defaultStyles();

  const users: User[] = [
    { id: '1', fistName: 'John', lastName: 'Snow' },
    { id: '2', fistName: 'Tom', lastName: 'Crus' },
    { id: '3', fistName: 'Bob', lastName: 'Markus' }
  ];

  const messageStart: Message = { id: '1', text: 'Let do this', from: users[0] };
  const twoMessageStart: Message = { id: '2', text: 'Great, just sent out the invite!', from: users[1] };

  const initialMessages: Message[] = [
    { ...messageStart },
    { ...twoMessageStart },
    { id: '3', text: 'Thats actually so cool', from: users[2] },
    { id: '4', text: 'So much excitement', from: users[2], sourceReply: messageStart },
    { id: '5', text: 'Haha, exactly', from: users[0] },
    { id: '6', text: 'Yep, I got It', from: users[0], sourceReply: twoMessageStart  },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleAddMessage = (text: string): void => {
    const id = messages.length + 1;
    const user = users[2];

    const message: Message = {
      id: id.toString(),
      text: text,
      from: user,
    };

    const newMessages = [...messages, message];
    setMessages(newMessages);
  };

  return (
    <>
      <View style={styles.root}>
        <View style={styles.board}>
          <ChatBoard messages={messages} userId={'3'} />
        </View>
        <ChatControlPanel onAddMessage={handleAddMessage} />
      </View>
    </>
  );
}

export default Chat;
