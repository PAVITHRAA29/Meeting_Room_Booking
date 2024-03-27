import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.scss';
import Router from './router';


function App() {

  return (
    <>
     <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}>
    <Router />
    </GoogleOAuthProvider>
  
    </>
  );
}

export default App;
