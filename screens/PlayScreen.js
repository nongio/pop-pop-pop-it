import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    Animated,
    Alert,
    Vibration,
} from 'react-native';

const DURATION = 200



export default class PlayScreen extends React.Component {
    constructor () {
        super()
        this.state = {
            size: 0.1,
        };

        this.balloonScale= new Animated.Value(this.state.size);

    }
    onPress = () => {
        if(this.state.size > 1.0) {
            this.setState({
                size: 0
            });
            Animated.timing(
                this.balloonScale,
                {
                    toValue:  0,
                    duration: 0,
                }
            ).start();
            Vibration.vibrate(DURATION)
            Alert.alert(
                'Boooom!',
                '',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
            );

        } else {
            this.setState({
                size: this.state.size + 0.1
            });
            Animated.spring(
                this.balloonScale,
                {
                toValue:  this.state.size,
                friction: 1
                }
            ).start()

        }
    }

    render() {
        return (
        <View style={styles.container}>
            <Animated.Image
                style={{ width: 341, height: 443, transform: [{scale: this.balloonScale}] }}
                source={require('../assets/images/balloon.png')}/>

                <TouchableWithoutFeedback style={styles.button} onPress={this.onPress}>
                    <View style={styles.buttonInner}></View>
                </TouchableWithoutFeedback>
        </View>
        );
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 100,
        width: 100,
        height: 100,
    },
    buttonInner: {
        width: 150,
        height: 150,
        backgroundColor: '#eb0045',
        borderRadius: 75,
    },
});
