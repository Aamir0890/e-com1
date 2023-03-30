import {initializeApp} from 'firebase/app';
import {getAuth,
        signInwithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
} from 'firebase/auth'

import {getFirestore,
       doc,
       getDoc,
       setDoc
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDMiivULpi5V-yLyK91kT9QuzTHArQ6lu8",
    authDomain: "rocket-clothing.firebaseapp.com",
    projectId: "rocket-clothing",
    storageBucket: "rocket-clothing.appspot.com",
    messagingSenderId: "261511741548",
    appId: "1:261511741548:web:c14bc112802489ffb75849"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider= new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });
    
  export const auth=getAuth();
  
  export const signInWithGooglePopup=()=> signInWithPopup(auth,provider)
   

  export const db=getFirestore();
  
  export const createUserDocumentFromAuth=async(userAuth)=>{
    const userDocRef=doc(db,'users','userAuth.uid')
    

    const userSnapshot=await getDoc(userDocRef);
  

    if(!userSnapshot.exists()){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try{
             await setDoc(userDocRef,{
              displayName,
              email,
              createdAt
             })
      }catch(error){console.log('error creatign the user',error.message)

      }
    }
    return userDocRef

  }
