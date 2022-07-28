import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { TextSizes } from "../TextContext.js";

const data = [
  { label: '0.5', value: 0.5 },
  { label: '0.75', value: 0.75 },
  { label: '1', value: 1.0 },
  { label: '1.25', value: 1.25 },
  { label: '1.5', value: 1.5 },
  { label: '1.75', value: 1.75 },
  { label: '2', value: 2 },
];

const SpeedDropdownComponent = () => {
  const { speakingspeed,setSpeakingspeed,pageColor,articleColor} =
    React.useContext(TextSizes);
  const [value, setValue] = useState(speakingspeed);
  const [isFocus, setIsFocus] = useState(false);
  

  return (
    <View style={[styles.container,{backgroundColor:pageColor}]}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={[styles.placeholderStyle,{color:articleColor}]}
        selectedTextStyle={[styles.selectedTextStyle,{color:articleColor}]}
        inputSearchStyle={[styles.inputSearchStyle,{color:articleColor}]}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          setSpeakingspeed(item.value)
        }}
        
      />
    </View>
  );
};

export default SpeedDropdownComponent;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1
  },
  dropdown: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});