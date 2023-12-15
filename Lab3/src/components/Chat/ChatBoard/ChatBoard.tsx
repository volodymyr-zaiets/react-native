import { ScrollView } from "react-native";
import ChatMessage from "@app/components/Chat/ChatMessage/ChatMessage";

import defaultStyles from './styles';
import { Message } from "@app/components/interfaces/Message";

export interface ChatBoardProps {
  messages: Message[],
  userId: string,
}

function ChatBoard({ messages, userId }: ChatBoardProps) {
  const styles = defaultStyles();

  return (
    <>
        <ScrollView contentContainerStyle={styles.content}>
          {messages.map((message) => <ChatMessage
            key={message.id}
            id={message.id}
            text={message.text}
            from={message.from}
            sourceReply={message.sourceReply}
            isMyMessage={userId === message.from.id}
          />)}
        </ScrollView>
    </>
  )
}

export default ChatBoard;
