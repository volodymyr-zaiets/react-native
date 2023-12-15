import React from 'react';
import ChatScreen from "@app/screens/ChatScreen/ChatScreen";
import { View } from "react-native";

function App(): React.ReactElement {
  return (
    <>
      <View style={{ flex: 1, padding: 10 }}>
        <ChatScreen />
      </View>
    </>
  );
}

export default App;
