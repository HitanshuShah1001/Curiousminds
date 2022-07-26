import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { TextSizes } from "../TextContext.js";
import languages from '../Data/Languages'

const DropdownComponent = () => {
  const { language,setLanguage,pageColor,articleColor} =
    React.useContext(TextSizes);
  const [value, setValue] = useState(language);
  const [isFocus, setIsFocus] = useState(false);
  

  return (
    <View style={[styles.container,{backgroundColor:pageColor}]}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={[styles.placeholderStyle,{color:articleColor}]}
        selectedTextStyle={[styles.selectedTextStyle,{color:articleColor}]}
        inputSearchStyle={[styles.inputSearchStyle,{color:articleColor}]}
        iconStyle={styles.iconStyle}
        data={languages}
        search
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
          setLanguage(item.value)
        }}
        
      />
    </View>
  );
};

export default DropdownComponent;

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