import React from "react";
import {ListItem, Icon} from 'react-native-elements';
import { StyleSheet, View, Text } from "react-native";

export default function AccountOption(props){
    const {userInfo, toastRef} = props
    const selectedComponent = (key) => {
        console.log('click')
        console.log(key)
    }

    const menuOptions = generatedOptions(selectedComponent)

    return(
        <View>
            {menuOptions.map((menu, index) => (
                <ListItem key={index} bottomDivider onPress={menu.onPress}>
                    <Icon name = {menu.iconNameLeft} />
                    <ListItem.Content>
                        <ListItem.Title>{menu.title}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
        </View>
    )
}

function generatedOptions(selectedComponent){
    return[
        {
            title: 'Cambiar nombre y apellidos',
            iconNameLeft: 'account-circle',
            onPress: () => selectedComponent('displayName')
        },
        {
            title: 'Cambiar email',
            iconNameLeft: 'drafts',
            onPress: () => selectedComponent('displayEmail')
        },
        {
            title: 'Cambiar password',
            iconNameLeft: 'lock',
            onPress: () => selectedComponent('displayPassword')
        }
    ]
}

