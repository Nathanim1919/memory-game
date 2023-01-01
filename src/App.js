import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';

const App = () =>{
  const [value,setValue] = useState(0)

  useEffect(() =>{
     console.log('rendered') 
  })
}

export default App