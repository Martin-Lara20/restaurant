import React from "react";
import {StyleSheet, View, Text, Image} from 'react-native'

export default function Register(){
    return(
        <View>
            <Image
                source={require('../../../assets/img/logo.png')}
                resizeMode = 'contain'
                style = {styles.logo}
            />
            <View style ={styles.viewForm}>
                <Text>Formulario de registro</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm:{
        marginRight: 40,
        marginleft: 40,
    },
    logo:{
        width:'100%',
        height: 150,
        marginTop: 20,
    },
})