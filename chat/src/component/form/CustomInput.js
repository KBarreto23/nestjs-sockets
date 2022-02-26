import React from 'react';
import { StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
import { Text, Input } from 'native-base';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  keyboardType = 'default',
}) => {
  const valueDefoult =
    name === 'email'
      ? /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      : rules?.pattern?.value;
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        ...rules,
        pattern: { value: valueDefoult, message: rules.pattern?.message },
      }}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <Input
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            backgroundColor="white"
            borderRadius={5}
            _dark={{ bg: 'coolGray.500' }}
            _light={{ bg: 'white' }}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
          />

          {error && (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{ color: 'red', alignSelf: 'stretch' }}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});

export default CustomInput;
