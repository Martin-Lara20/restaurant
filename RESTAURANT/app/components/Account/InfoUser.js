import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {Avatar} from 'react-native-elements'
import firebase from 'firebase'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export default function InforUser(props){
    /* props trae toda la informaciójn de UserInfo */
    const {userInfo : {photoURL, displayName, email} } = props

    const changeAvatar= async()=>{
        const resultPermissions = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
        const resultPermissionsCamera = resultPermissions.permissions.mediaLibrary.status
    
        if (resultPermissionsCamera === 'denied'){
            toastRef.current.show({
                type: 'info',
                position: 'top',
                text1: 'Permissions',
                text2: 'Es necesario aceptar los permisos de galeria',
                visibilityTime: 30000
            });
        }else{
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect:[4,3]
            })
            console.log(result)
        }
    }

    return(
        <View style={styles.viewUserInfo}>
            <Avatar 
                title='Martin'
                rounded
                size= 'large'
                onPress={changeAvatar}
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
        /* flexBasis: 'Row', */
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