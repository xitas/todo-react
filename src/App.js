import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
const axiosinstence = axios.create(
  { baseURL: 'http://localhost:8000/' }
)

const config = {
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:8000/",
  }
}

function App() {
  const [task, setTask] = useState([]);


  const getTasks = async () => {
    const result = await axiosinstence.get('tasks', {}, config).then(
      (response) => {
        console.log(response)
        setTask(response.data)
      }
    )
  };

  const addTask = async () => {
    const result = await axiosinstence.post('tasks', { title: 'This is a title', description: 'This is an example of discription' }).then(
      (response) => {
        console.log(response)
      }
    )
  };
  const updateTask = async () => {
    const result = await axiosinstence.put('tasks/1/', { title: 'This is updated title', description: 'This is an updated example of discription', status: 'working' }).then(
      (response) => {
        console.log(response)
      }
    )
  };
  const deleteTask = async () => {
    const result = await axiosinstence.get('tasks/2/').then(
      (response) => {
        console.log(response)
      } 
    )
  };

  useEffect(() => {
    // addTask();
    // getTasks();
  }, [])

  return (
    <>

    </>
  );
}

export default App;
