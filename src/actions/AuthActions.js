import OpenRealm from "../database/OpenRealmApp"
import { ObjectId } from "bson"
import { GetApp } from "../database/GetRealmApp"

export function GetActions(dispatch) {
    const app = GetApp()
    return {
      signIn: async data => {
        const {email, password} = data;
        const credentials = Realm.Credentials.emailPassword(email, password);
  
        try {
          const user = await app.logIn(credentials);
  
          dispatch({type: 'SIGN_IN', userId: user.id});
          console.log('successfully logged in ', user.id);
        } catch (error) {
          console.log(
            "Connexion a échouée avec l'erreur : ",
            error,
          );
        }
      },
  
      signOut: async () => {
        await app.currentUser.logOut();
        dispatch({type: 'SIGN_OUT'});
      },
  
      signUp: async data => {
        const {email, password} = data;
        try {
          console.log(app)
          await app.emailPasswordAuth.registerUser(email, password);
          console.log('registerEmailPassword')
          const credentials = Realm.Credentials.emailPassword(email, password);
          console.log('get credentials : ', credentials)
          const user = await app.logIn(credentials);
          console.log('user : ' + user)
          const realm = await OpenRealm()
          console.log("realm : " + realm)

          var inscrit = ""
          realm.write(() => {
            inscrit = realm.create("User", 
              {
                _id : new ObjectId(user.id),
                _partition: user.id,
                name: email,
              }, 'modified'
            ) 
          })
          realm.close()
          console.log("Inscription établie avec succès")
          dispatch({type: 'SIGN_IN', userId: user.id});
          
        } catch (error) {
          console.log(
            "l'authentification a échouée avec l'erreur : ",
            error,
          );
        }
      },
    };
  }
  