import React, { useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Text } from 'native-base';
import PhoneInput from 'react-native-phone-input';

const CostumPhoneInput = ({ control, name, rules = {}, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <PhoneInput
            value={value}
            textProps={{
              placeholder: placeholder,
              onBlur,
              onFocus: handleFocus,
              value: value,
            }}
            onChangePhoneNumber={onChange}
            initialCountry="pr"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
              height: 32,
              borderColor: isFocused ? '#005db4' : '#e7e5e4', //darkBlue.600, warmGray.200
              borderWidth: 1,
            }}
            pickerBackgroundColor="white"
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

export default CostumPhoneInput;
