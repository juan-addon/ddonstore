import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import { GoogleAuthProvider } from 'firebase/auth'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup().then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const userReferente = createUserDocumentFromAuth(user);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });;
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={ logGoogleUser }>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
