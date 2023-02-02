import './App.css';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth } from './firebase.config';
import { Chatroom } from './components/Chatroom';
import { SignIn } from './components/SignIn';


function App() {
  
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h3>Realtime Chat with Typescript</h3>
      </header>
      <section>
        {user ? <Chatroom/> : <SignIn/>}
      </section>
    </div>
  );
}

export default App;
