import { Text, View } from "react-native";

import defaultStyles from './styles';
import BackButton from "@app/components/BackButton/BackButton";
import IconButton from "@app/components/IconButton/IconButton";

function ChatBar() {
  const style = defaultStyles();

  return (
    <>
      <View style={style.root}>
        <View>
          <BackButton
            iconName={'chevron-left'}
            label={'back'}
          />
        </View>
        <View style={style.mainSection}>
          <Text style={style.title}>
            Instamobile Team
          </Text>
        </View>
        <View>
          <IconButton
            name={'settings'}
            size={30}
          />
        </View>
      </View>
    </>
  )
}

export default ChatBar;
