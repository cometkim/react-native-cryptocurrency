import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>Cryptocurrency App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        marginTop: 50,
        alignItems: 'center',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
    },
})

const { headerContainer, header } = styles

export default Header