import { TextInput, View } from "react-native";

import defaultStyles from './styles';
import IconButton from "@app/components/IconButton/IconButton";
import { useState } from "react";

interface ChatInputProps {
  onPressEnter: (text: string) => void
}

function ChatInput({ onPressEnter }: ChatInputProps) {
  const styles = defaultStyles();
  const [textInput, setTextInput] = useState<string>('')

  const handleSubmitEditing = (): void => {
    onPressEnter(textInput);
    setTextInput('');
  };

  const handleChangeText = (text: string): void => {
    setTextInput(text);
  };

  return (
    <>
      <View style={styles.root}>
        <IconButton
          name={'mic'}
          size={30}
        />
        <TextInput
          placeholder={"Start typing..."}
          style={styles.textInput}
          value={textInput}
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmitEditing}
        />
      </View>
    </>
  )
}

export default ChatInput;
