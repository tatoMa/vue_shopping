import Firebase from 'firebase'

// let config = {
//   apiKey: '',
//   authDomain: 'newtest-ad2c2.firebaseapp.com',
//   databaseURL: 'https://newtest-ad2c2.firebaseio.com',
//   projectId: 'newtest-ad2c2',
//   storageBucket: 'newtest-ad2c2.appspot.com',
//   messagingSenderId: ''
// }
//
// Firebase.initializeApp(config)
// export default Firebase.database()

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyAUBE_nV5_nwZo11dt3LLD7uczrvdRNfeg',
  authDomain: 'newtest-ad2c2.firebaseapp.com',
  databaseURL: 'https://newtest-ad2c2.firebaseio.com',
  projectId: 'newtest-ad2c2',
  storageBucket: 'newtest-ad2c2.appspot.com',
  messagingSenderId: '522353399891'
})

// Firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // problems method need to fix
//     // this.$store.dispatch('autoSignIn', user)
//   }
// })

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
