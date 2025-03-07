import { TouchableOpacity, Text } from 'react-native'
import Style from '../style/Style'

export default function Button(props) {
    return(
        <>
            <TouchableOpacity style={Style.buttonContainer} onPress={props.onPress}>
                <Text>{props.signal}</Text>
            </TouchableOpacity>
        </>
    );
}