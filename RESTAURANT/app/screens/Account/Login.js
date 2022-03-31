import React from 'react'
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native'
import {Divider} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Login(){
    const navigation = useNavigation()
    return(
        <ScrollView>
            <Image
                source={require('../../../assets/img/logo.png')}
                resizeMode = 'contain'
                style = {styles.logo}
            />

            <View style = {styles.viewContainer}>
                <Text>Login Form</Text>
                <CreateAccount/>
            </View>
            <Divider style={styles.divider}/>
        </ScrollView>
    )
}

function CreateAccount(){
    return(
        <Text style = {styles.textRegister}>
            ¿Aun no tienes cuenta?{' '}
            <Text style = {styles.linkRegister}
                onPress ={()=>navigation.navigate('register')}
            >
                Sign Up
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({

    logo:{
        width:'100%',
        height: 150,
        marginTop: 20,
    },
    viewContainer:{
        marginRight: 40,
        marginLeft: 40,

    },
    divider:{
        backgroundColor: '#00a680',
        margin: 40,
    },
    textRegister:{
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    linkRegister:{
        color:'#00a680',
        fontWeight: 'bold'
    }

})