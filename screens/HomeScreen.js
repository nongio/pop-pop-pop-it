import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default class HomeScreen extends React.Component {
    onStart = () => {
        this.props.navigation.navigate('Play');

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inner}>
                    <Text style={styles.title}>Pop-Pop-Pop-it</Text>
                    <TouchableOpacity style={styles.button} onPress={this.onStart}>
                        <Text style={styles.buttonText}>start</Text>
                    </TouchableOpacity>
                </View>
            </View>
            );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffda00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red',
        fontSize: 45,
    },
    button: {
        backgroundColor: 'red',
        width: 200,
        marginTop: 50,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 25,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,

    },
});
