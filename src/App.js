import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [task, setTask] = useState([]);

  const fetchTaskData = async () => {
    const result = await axios.get('http://localhost:5000/api/data');
    console.log(result.data);
    setTask(result.data);
  };

  useEffect(() => {
    fetchTaskData();
  }, [])
  
  return (
    <>
    </>
  );
}

export default App;
