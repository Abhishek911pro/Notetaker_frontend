import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPages'
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      
        <div className="App">
        <Header/>
        <Routes>
        <Route path="/" exact Component={NotesListPage}/>
        </Routes>
        <Routes>
        <Route path="/note/:id" Component={NotePage}/>
        </Routes>
        </div>
        
    </Router>
    
  );
}

export default App;
