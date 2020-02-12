import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB6YY90TQ4suWVYPLPZO3funXg8QUqiCi0",
  authDomain: "thinkpiece-220c8.firebaseapp.com",
  databaseURL: "https://thinkpiece-220c8.firebaseio.com",
  projectId: "thinkpiece-220c8",
  storageBucket: "thinkpiece-220c8.appspot.com",
  messagingSenderId: "215023684234",
  appId: "1:215023684234:web:5f1f3aa3633baee32f7b73",
  measurementId: "G-BSS4356MP5"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()

firestore.settings({ timestampsInSnapshots: true })

window.firebase = firebase

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return

  // Get a reference to the place in the database where a user profile might be.
  const userRef = firestore.doc(`users/${user.uid}`)

  // Go and fetch the document from that location.
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error("Error creating user", error.message)
    }
  }

  return getUserDocument(user.uid)
}

export const getUserDocument = async uid => {
  if (!uid) return null
  try {
    return firestore.collection("users").doc(uid)
  } catch (error) {
    console.error("Error fetching user", error.message)
  }
}

export default firebase
