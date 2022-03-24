import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import {Icon} from 'react-native-elements'

import RestaurantsStacks from "./RestaurantsStacks"
import FavoritesStack from "../navigation/FavoritesStacks"
import TopRestaurantsStack from "../navigation/TopRestaurantsStacks"
import SearchStack from "../navigation/SearchStacks"
import AccountStacks from "../navigation/AccountStacks"

const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName = "restaurants"
                tabBarOptions={{
                    inactipeTinColor: '#646464',
                    activeTintColor: '#00a680',

                }}
                screenOptions = {({route}) => ({
                  tabBarIcon: ({color}) => screenOptions (route, color)  
                })}
            >
                <Tab.Screen 
                    name = 'restaurants'
                    component= {RestaurantsStacks}
                    options= {{title:'Restaurantes'}}
                />
                  <Tab.Screen 
                    name = 'favorites'
                    component= {FavoritesStack}
                    options= {{title:'Favoritos'}}
                />
                  <Tab.Screen 
                    name = 'topRestaurants'
                    component= {TopRestaurantsStack}
                    options= {{title:'Top 5'}}
                />
                  <Tab.Screen 
                    name = 'search'
                    component= {SearchStack}
                    options= {{title:'Buscar'}}
                />
                  <Tab.Screen 
                    name = 'account'
                    component= {AccountStacks}
                    options= {{title:'Cuenta'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color){
    let iconName
    switch (route.name) {
        case 'restaurants':
            iconName = "silverware-fork-knife"
            break;
        case 'favorites':
            iconName = 'heart-outline'
            break;
        case 'topRestaurants':
            iconName = 'star-outline'
            break;
        case 'search':
            iconName = 'magnify'
            break;
        case 'account':
            iconName = 'account'
            break
    }

    return(
        <Icon type = 'material-community' name = {iconName} size={22} color ={color}/>
    )
}