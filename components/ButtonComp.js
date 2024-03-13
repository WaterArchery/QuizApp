import { View } from 'react-native'
import { Button } from 'react-native';

function ButtonComp(props) {
    func = props.func;
    text = props.text;
    info = props.info;
    color = props.color;
    return (
        <View style={{margin:10}}>
            <Button
            onPress={this.func}
            title={this.text}
            color={this.color}
            accessibilityLabel={this.info}
            />
        </View>
    );
}

export default ButtonComp