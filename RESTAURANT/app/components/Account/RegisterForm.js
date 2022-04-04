import React, {useState} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Input, Icon, Button} from 'react-native-elements'
import firebase from 'firebase'

import { validateEmail } from '../../utils/Validation'


export default function RegisterForm(props){
    const {toastRef} = (props) 
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setShowRepeatPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())

    const onSubmit = () => {
        /* console.log(formData)
        console.log(validateEmail(formData.email)) */
        if(formData.email.length===0 ||formData.password.length===0 || formData.repeatPassword.length===0){
             toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Empty',
                text2: 'Todos los campos son requeridos',
                visibilityTime: 30000
            });
        }else if(!validateEmail(formData.email)){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Empty',
                text2: 'El email es incorrecto',
                visibilityTime: 30000
            });        
        } else if(formData.password !== formData.repeatPassword){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Empty',
                text2: 'Las contraseñas deben ser identica',
                visibilityTime: 30000
            });
            
        } else if(formData.password.length < 6){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Empty',
                text2: 'El Password debe tener mínimo 6 caracteres',
                visibilityTime: 30000
            });
        } else{
            firebase.auth().
            createUserWithEmailAndPassword(formData.email, formData.password)
            .then((response) =>{
                console.log(response)
            })
            .catch((err)=>{
                console.log(err)
                toastRef.current.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Empty',
                    text2: 'Este correo ya está registrado',
                    visibilityTime: 30000
                });
            })
        }
    }

    const onChange = (e, type) => {

        setFormData({...formData,[type]: e.nativeEvent.text})
    }

    return(
        <View style={styles.formContainer}>
            <Input
                placeholder='Correo Electronico'
                containerStyle = {styles.inputForm}
                onChange = {(e) => onChange(e, 'email')}
                rightIcon = {<Icon 
                    type= 'material-community' 
                    name= 'at' 
                    iconStyle={styles.iconRight}/>
                }
            />
            <Input
                placeholder='Contraseña'
                containerStyle = {styles.inputForm}
                onChange = {(e) => onChange(e, 'password')}
                password= {true}
                secureTextEntry={showPassword ? false : true}
                rightIcon = {<Icon 
                    type= 'material-community' 
                    name= {showPassword ? 'eye-off-outline' : 'eye-outline'} 
                    iconStyle={styles.iconRight}
                    onPress = {()=> setShowPassword(!showPassword)}
                
                />}
            />
            <Input
                placeholder='Repetir Contraseña'
                containerStyle = {styles.inputForm}
                onChange = {(e) => onChange(e, 'repeatPassword')}
                password= {true}
                secureTextEntry={showRepeatPassword ? false : true}
                rightIcon = {<Icon 
                    type= 'material-community' 
                    name= {showRepeatPassword ? 'eye-off-outline' : 'eye-outline'} 
                    iconStyle={styles.iconRight}
                    onPress = {()=> setShowRepeatPassword(!showRepeatPassword)}
                
                />}
            />
            <Button
                title='Unete'
                ContainerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress = {onSubmit}
            />                        
        </View>
    )
}

function defaultFormValues(){
    return{
        email: '',
        password: '',
        repeatPassword: ''
    }
}


const styles = StyleSheet.create({
    formContainer:{
        marginTop: 30
    },
    inputForm:{
        width: '100%',
        marginTop: 20
    },
    btnContainerRegister:{
        marginTop: 20,
        width: '95%'
    },
    btnRegister:{
        backgroundColor: '#00a680'
    },
    iconRight:{
        color: '#C1C1C1'
    }
})