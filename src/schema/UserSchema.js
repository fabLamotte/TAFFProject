const UserSchema = {
    name: 'User',
    properties: {
      _id: 'objectId?',
      firstname: 'string?',
      lastname: 'string?',
    },
    primaryKey: '_id'
};

export default UserSchema