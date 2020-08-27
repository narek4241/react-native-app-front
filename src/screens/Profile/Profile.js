import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Profile() {
    return (
        <View style={[styles.container, styles.centerFlex]}>
            <Text>PROFILE</Text>
        </View>
    );
}

// PROVIDE HIGH ACCURANCY (css)
const styles = StyleSheet.create({
    // try sass nuance
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e1e2c',
    },
    // centerFlex: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // grey1pxborder: {
    //     borderRadius: 15,
    //     borderWidth: 1,
    //     borderStyle: 'solid',
    //     borderColor: '#312f3d',
    //     padding: 12.5,
    // },
});

