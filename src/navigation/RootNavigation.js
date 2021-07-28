import React from 'react'

import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'
import auth from '@react-native-firebase/auth'

const RootNavigation = () => {
    const user = auth().currentUser
    
    return user ?(<AppNavigation />) : (<AuthNavigation />)
}

export default RootNavigation