import React, {useState, useEffect} from 'react'

import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'
import { UserContext } from '../contexts/UserContext'

const RootNavigation = () => {
    const [user, setUser] = useState()
    const [initialized, setInitialized] = useState(false)
    const data = {
        user:user,
        setUser:() => setUser()
    }
    
    return(
        <UserContext.Provider value={ data }>
            {
                user ? 
                <AppNavigation /> 
                : 
                <AuthNavigation 
                initialized={initialized} 
                setInitialized={setInitialized} 
                user={user} 
                setUser={setUser}         
                />
            }
        </UserContext.Provider>
    )
}

export default RootNavigation