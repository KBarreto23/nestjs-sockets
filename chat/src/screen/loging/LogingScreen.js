import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Link,
  Button,
  HStack,
  KeyboardAvoidingView,
  useColorMode,
} from 'native-base';
import navigationScreen from '../../navegetion/navigationScreens';
import CustomInput from '../../component/form/CustomInput';
import { useForm } from 'react-hook-form';

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { control, handleSubmit } = useForm();

  const { openTabNavigator } = navigationScreen();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Box
        flex={1}
        w="100%"
        mx="auto"
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'white' }}
      >
        <KeyboardAvoidingView
          h={{
            lg: 'auto',
          }}
          flex={1}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Box flex={0.35} alignItems="center" justifyContent="center">
            <Heading
              mt={1}
              size="xl"
              fontWeight="900"
              justifyContent="center"
              color={colorMode === 'light' ? 'darkBlue.800' : 'white'}
            >
              Chat
            </Heading>
          </Box>
          <Box
            flex={1}
            flexDirection="row"
            borderTopRadius={30}
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'darkBlue.800' }}
          >
            <Box flex={1} p="2" py="8" w="90%" mx="auto" padding={5}>
              <Heading size="lg" fontWeight="600" color="white">
                Welcome
              </Heading>
              <Heading mt="1" color="white" fontWeight="medium" size="xs">
                Sign in to continue!
              </Heading>

              <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label
                    _text={{
                      color: 'white',
                      fontSize: 'xs',
                      fontWeight: 500,
                    }}
                  >
                    Email
                  </FormControl.Label>
                  <CustomInput
                    name="email"
                    control={control}
                    rules={{
                      required: 'Email is required',
                      pattern: { message: 'Email is invalid' },
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormControl.Label
                    _text={{
                      color: 'white',
                      fontSize: 'xs',
                      fontWeight: 500,
                    }}
                  >
                    Password
                  </FormControl.Label>

                  <CustomInput
                    name="password"
                    control={control}
                    secureTextEntry
                    rules={{
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message:
                          'Password should be at least 8 characters long',
                      },
                    }}
                  />

                  <Link
                    _text={{
                      fontSize: 'xs',
                      fontWeight: '500',
                      color: 'white',
                    }}
                    alignSelf="flex-end"
                    mt="1"
                  >
                    Forget Password?
                  </Link>
                </FormControl>

                <Button
                  mt="2"
                  bg="blueGray.600"
                  colorScheme="darkBlue"
                  _text={{ color: 'white' }}
                  borderRadius={20}
                  _dark={{ bg: 'coolGray.700' }}
                  _light={{ bg: 'blueGray.600' }}
                  onPress={openTabNavigator}
                >
                  Sign in
                </Button>
                <HStack mt="6" justifyContent="center">
                  <Text fontSize="sm" color="white" fontWeight={400}>
                    I'm a new user.
                  </Text>
                  <Link
                    _text={{
                      color: 'white',
                      fontWeight: 'medium',
                      fontSize: 'sm',
                    }}
                  >
                    Sign Up
                  </Link>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </KeyboardAvoidingView>
      </Box>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    flex: 1,
  },
  title: {
    color: 'white',
  },
  inputView: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 46,
    borderRadius: 5,
    width: '100%',
    marginTop: 7,
    marginBottom: 7,
  },
  input: {
    height: 46,
    paddingLeft: 9,
    paddingRight: 9,
    fontSize: 18,
    color: 'black',
  },
});
