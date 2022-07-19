import { Appearance } from "react-native";


const colorScheme = Appearance.getColorScheme();

export let textColor = colorScheme==='dark'?'#FFFFFF':'#000000';
export let pageColor = colorScheme==='dark'?'#000000':'#FFFFFF';
export let lineColor = colorScheme==='dark'?'#FFFFFF':'#000000';

