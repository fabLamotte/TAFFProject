import React, {useReducer, useMemo} from 'react'

import RootNavigation from './src/navigation/RootNavigation'

import { AuthContext } from './src/context/AuthContext'
import { GetActions } from './src/actions/AuthActions'
import { Reducer } from './src/reducers/Reducer'
import { GetApp } from './src/database/GetRealmApp'

const App = () => {
  const [state, dispatch] = useReducer(Reducer, {
    isLoading: true,
    isSignout: false,
    userId: null,
  })

  const LogContext = useMemo(() => {
    const app = GetApp()
    console.log(app)
    return GetActions(app, dispatch)
  }, [])

  return (
    <AuthContext.Provider value={LogContext}>
      <RootNavigation userId={state.userId} />
    </AuthContext.Provider>
  )
}

export default App
