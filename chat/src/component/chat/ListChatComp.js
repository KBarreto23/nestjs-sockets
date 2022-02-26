import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Image, Text } from 'native-base';
import navigationScreen from '../../navegetion/navigationScreens';

export default function ListChatComp() {
  const { OpenChat } = navigationScreen();
  return (
    <View style={styles.box}>
      <TouchableOpacity onPress={OpenChat}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 0.1, justifyContent: 'center' }}>
            <Image
              source={require('../../assets/images/undraw_profile_pic.png')}
              alt="image"
              width={35}
              height={35}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', padding: 5 }}>
            <View style={{ flex: 1 }}>
              <Text fontSize="md" color={'#004282'}>
                Kevin Barreto
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text fontSize="9" color={'#9c9c9c'}>
                Hola
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e1e1e1',
  },
  container: {
    flex: 1,
    padding: 15,
  },
});
