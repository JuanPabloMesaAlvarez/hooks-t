import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Login from './components/login';
import Note from './components/note';
import NotesContext, { NotesContextProvider } from './contexts/notes-context';

function App() {

  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <NotesContextProvider>
        <Note value={[1,2,3]} />
      </NotesContextProvider>

    </div>
  );
}

export default App;
