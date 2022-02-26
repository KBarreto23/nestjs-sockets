import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { Image, ScrollView } from 'native-base';
import ListChatComp from '../../component/chat/ListChatComp';
export default function ListChat() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <ListChatComp />
          <ListChatComp />
          <ListChatComp />
          <ListChatComp />
          <ListChatComp />
          <ListChatComp />
          <ListChatComp />
          <ListChatComp />
          <ListChatComp />
          <ListChatComp />
          <ListChatComp />
          <ListChatComp />
          <ListChatComp />
          <ListChatComp />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
