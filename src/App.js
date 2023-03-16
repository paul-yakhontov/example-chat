import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import ChatContainer from './components/ChatContainer';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatContainer />}
    </div>
  );
}

export default App;
