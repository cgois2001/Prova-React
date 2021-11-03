import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home.js"


function App() {
  return (
    <>
      <Router>
        <Routes/>
      </Router>
      
    </>
  );
}

export default App;