import { useNavigation } from '@react-navigation/native';

export default function navigationScreen() {
  const navigation = useNavigation();

  const openTabNavigator = () => {
    navigation.navigate('TabNavigator');
  };
  const OpenChat = () => {
    navigation.navigate('Chat');
  };

  return {
    openTabNavigator,
    OpenChat,
  };
}
