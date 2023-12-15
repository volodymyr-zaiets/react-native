import { View } from "react-native";
import IconButton from "@app/components/IconButton/IconButton";
import ChatInput from "@app/components/Chat/ChatInput/ChatInput";

import defaultStyles from './styles';

interface ChatControlPanelProps {
  onAddMessage: (text: string) => void
}

function ChatControlPanel({ onAddMessage }: ChatControlPanelProps) {
  const styles = defaultStyles();

  const handlePressEnter = (text: string): void => {
    onAddMessage(text);
  };

  return (
    <>
      <View style={styles.root}>
        <View>
          <IconButton
            name={'photo-camera'}
            size={25}
          />
        </View>
        <View style={styles.inputContainer}>
          <ChatInput onPressEnter={handlePressEnter} />
        </View>
        <View>
          <IconButton
            name={'send'}
            size={25}
          />
        </View>
      </View>
    </>
  )
}

export default ChatControlPanel
