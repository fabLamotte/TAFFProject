import React, {useState, useEffect} from 'react'

import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'
import auth from '@react-native-firebase/auth'

const RootNavigation = () => {
    const [user, setUser] = useState()
    const [initialized, setInitialized] = useState(false)
    const data = {
        user:user,
        setUser:() => setUser()
    }
    
    return user ? 
    <AppNavigation /> 
    : 
    <AuthNavigation 
        initialized={initialized} 
        setInitialized={setInitialized} 
        user={user} 
        setUser={setUser}     
    />
}

export default RootNavigation