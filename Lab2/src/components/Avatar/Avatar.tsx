import { Image, View } from "react-native";

import defaultStyles from './styles';

function Avatar() {
  const styles = defaultStyles();

  return (
    <>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/img/mock-photo.jpeg')}
        />
      </View>
    </>
  );
}

export default Avatar;
