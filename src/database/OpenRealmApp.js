import Realm from 'realm'
import { UserSchema } from './../schema/Index'
import { GetApp } from './GetRealmApp'

export default async function OpenRealm() {
  let realm

  const app = GetApp()

  try {
    const config = {
      schema: [UserSchema],
      sync: {
        user: app.currentUser,
        partitionValue: '60e4b54151d68d396c60bb94',
      },
    }
    
    realm = await Realm.open(config)
    return realm
  } catch (error) {
    throw `Error opening realm: ${JSON.stringify(error, null, 2)}`
  }
}
