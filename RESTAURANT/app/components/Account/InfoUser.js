import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {Avatar} from 'react-native-elements'
import firebase from 'firebase'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'


export default function InfoUser(props){
    /* props trae toda la informaciójn de UserInfo */
    const {userInfo : {uid, photoURL, displayName, email, toastRef}  } = props

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
            if(result.cancelled){
                toastRef.current.show({
                    type: 'Info',
                    position: 'top',
                    text1: 'Cancelled',
                    text2: 'Selecciona una imagen',
                    visibilityTime: 30000
                });
            } else{
                uploadImage(result.uri).then(() =>{
                    console.log('Imagen dentro de firebase')
                    updatePhotoUrl()
                }).catch(() => {
                    toastRef.current.show({
                        type: 'Error',
                        position: 'top',
                        text1: 'Firebase Error',
                        text2: 'No se pudo actualizar el avatar',
                        visibilityTime: 30000
                    });
                })
            }
        }
    }

    /* Es una funcion para enviar la información a traves de un JSON a firebase
    para que se guarde, practicamente simplifica todo el codigo de la uri 
    esto sube a imagen y  uestra ña información*/
    const uploadImage = async (uri) => {
        console.log(uri)
        const response = await fetch(uri)
        console.log(JSON.stringify (response))
        const blob = await response.blob()
        console.log(JSON.stringify(blob))
        const ref = firebase.storage().ref().child(`Avatar/${uid}`)
        return ref.put(blob)
    }
    const updatePhotoUrl = () =>{
        firebase.storage().ref(`Avatar/${uid}`).getDownloadURL()
        .then(async(response)=>{
            console.log(response)
            const update = {photoURL : response}
            await firebase.auth().currentUser.updateProfile(update)
            console.log('Imagen actualizada')

        })
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