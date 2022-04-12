import React, {useState} from "react";
import {StyleSheet, View} from 'react-native'
import {Input, Button} from 'react-native-elements'
import firebase from "firebase";

export default function ChangeDisplayPasswordForm(){
    return (
        <View style={styles.view}>
            <Input
                placeholder="Contraseña actual"
                containerStyle = {styles.input}
                rightIcon={{
                    type:'material-community',
                    name: 'lock',
                    color: '#c2c2c2'      
                }}            
            />
            <Input
                placeholder="Nueva contraseña"
                containerStyle = {styles.input}
                rightIcon={{
                    type:'material-community',
                    name: 'lock',
                    color: '#c2c2c2'      
                }}            
            />

            <Button
                title='Cambiar Contraseña'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10
    },
    view:{
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    btnContainer:{
        marginTop:20,
        width: '95%'
    }
    ,
    btn:{
        backgroundColor: '#00a680'
    }


})