import React from 'react'

import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';
import { UserContext } from '../contexts/UserContext';
import auth from '@react-native-firebase/auth';


const RootNavigation = (props) => {
    const userId = auth().currentUser.uid;
    // const {
    //     userId
    // } = props

    // return userId?(
    //     <AppNavigation />
    // ) : (
    //     <AuthNavigation />
    // )

    if (userId == [null]) {
        return (
            <AuthNavigation />
        )
    } else {
        return (
            <AppNavigation />
        )
    }
}

export default RootNavigation