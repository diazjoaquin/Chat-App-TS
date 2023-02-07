import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth } from './firebase.config';
import { SignIn } from './pages/SignIn';
import Home from './pages/Home';


function App() {
  
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
      </header>
      <section>
        {/* {user ? <Chatroom/> : <SignIn/>} */}
        <Home/>
      </section>
    </div>
  );
}

export default App;
