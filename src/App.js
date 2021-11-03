import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "../src/components/Header/header.js"

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes/>
      </Router>
      
    </>
  );
}

export default App;