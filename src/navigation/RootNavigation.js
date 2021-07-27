import React from 'react'

import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'

const RootNavigation = (props) => {
    const userId = true

    return userId?(
        <AppNavigation />
    ) : (
        <AuthNavigation />
    )
}

export default RootNavigation