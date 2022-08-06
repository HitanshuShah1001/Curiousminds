import {View,Text,Modal,Button} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from '../Styles/Betalisten';

export default function BetaListen({visible,click}){
    return(
    <Modal visible={visible} style={styles.modal} animationType="slide" transparent={true}>
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Text style={styles.text}>
                    This feature is still in beta mode,
                    there might be some bugs,
                    feel free to report them to 
                </Text>
                <Button title="hitanshushah5@gmail.com" color={'white'}></Button>
                <Pressable onPress={click} style={{position:'absolute',bottom:10,}}>
                <Text style={[styles.text,{fontSize:16}]}>Dismiss</Text>
                </Pressable>
            </View>
            
        </View>
    </Modal>
    )
}