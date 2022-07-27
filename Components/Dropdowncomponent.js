import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Arabic ', value: 'ar-SA' },
  { label: 'Czech', value: 'cs-CZ' },
  { label: 'Danish', value: 'da-DK' },
  { label: 'German', value: 'de-DE' },
  { label: 'Modern Greek', value: 'el-GR' },
  { label: 'English(Aus)', value: 'en-AU' },
  { label: 'English(UK)', value: 'en-GB' },
  { label: 'English(Irish)', value: 'en-IE' },
  { label: 'English(US) ', value: 'en-US' },
  { label: 'Spanish(Spain)', value: 'es-ES' },
  { label: 'Spanish(Mexico)', value: 'es-MX' },
  { label: 'Finnish', value: 'fi-FI' },
  { label: 'French(Canada)', value: 'fr-CA' },
  { label: 'French(France)', value: 'fr-FR' },
  { label: 'Hebrew(Israel)', value: 'he-IL' },
  { label: 'Hindi', value: 'hi-IN' },
  { label: 'Hungarian ', value: 'hu-HU' },
  { label: 'Indonesian', value: 'id-ID' },
  { label: 'Italian', value: 'it-IT' },
  { label: 'Japanese', value: 'ja-JP' },
  { label: 'Korean', value: 'ko-KR' },
  { label: 'Dutch(Belgium)', value: 'nl-BE' },
  { label: 'Dutch(Netherlands', value: 'nl-NL' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
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
        }}
        
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
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