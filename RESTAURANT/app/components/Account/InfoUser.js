import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {Avatar} from 'react-native-elements'

export default function InforUser(props){
    /* props trae toda la informaciójn de UserInfo */
    const {userInfo} = props
    const {photoURL, displayName, email} = userInfo
    console.log(photoURL)
    console.log(displayName)
    console.log(email)
    return(
        <View style={styles.viewUserInfo}>
            <Avatar 
                title='Martin'
                rounded
                size= 'large'
                containerStyle={styles.userInforAvatar}
                source={
                    photoURL ? {uri:photoURL} : require('../../../assets/img/avatar-default.jpg')
                }
                /* Condicional ternario */
            />
            <View>
                <Text style={styles.displayName}>
                    {displayName ? displayName : 'Invitado'}
                </Text>
                <Text style={styles.displayName}>
                    {email ? email: 'Entrada por SSO'}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewUserInfo:{
        alignItems: 'center',
        justifyContent:'center',
        flexBasis: 'row',
        backgroundColor: '#f2f2f2',
        paddingTop: 10,
        paddingBottom: 30
    },
    userInforAvatar:{
        marginTop: 20,
        backgroundColor: '#00a680'
    },
    displayName:{
        fontWeight: 'bold',
        paddingBottom: 5,

    }
})