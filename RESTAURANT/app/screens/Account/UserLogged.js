import React, {useState, useRef, useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from "react-native-elements"
import firebase from 'firebase'
import Toast from 'react-native-toast-message'

import InfoUser from '../../components/Account/InfoUser'
import AccountOption from '../../components/Account/AccaountOption'


export default function UserLogged(){
    const[userInfo, setUserInfo, ] = useState(null)
    const[reloadUserInfo, setReloadUserInfo] = useState(false)
    const toastRef = useRef()

    // () hace referencaia a que es anonima */
    //Aqui mandamos a llamar la info de firebase
    useEffect( ()=>{
        (async()=>{
            const user = await firebase.auth().currentUser
            setUserInfo(user)
        })()
        setReloadUserInfo(false)
    },[reloadUserInfo])
           
    return (
        <View style ={styles.viewUserInfo}>

           {userInfo && (<InfoUser userInfo={userInfo} toastRef={toastRef}/>)}
           <AccountOption userInfo ={userInfo} toastRef={toastRef} setReloadUserInfo={setReloadUserInfo}/>

            <Button 
                buttonStyle ={styles.btnCloseSesion}
                titleStyle={styles.btnClaseSessionText}
                title='Cerrar Sesión' 
                onPress={()=>firebase.auth().signOut()}
            />
            <Toast ref={toastRef}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewUserInfo:{
        minHeight: '100%',
        backgroundColor: '#f2f2f2'
    },
    btnCloseSesion:{
        marginTop: 30,
        borderRadius: 0,
        backgroundColor: '#00a680',
        borderTopWidth:1,
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
    },
    btnClaseSessionText:{
        color: '#fff'
    }
})