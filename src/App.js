import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState([]);

  const getTask = () => {
    fetch("http://localhost:8000/tasks/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        setTask(data);
      })
  };

  const adddata = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'This is a title', description: 'This is an example of discription' }),
  };

  const addTask = () => {
    fetch("http://localhost:8000/tasks/", adddata)
      .then(response => {
        getTask();
      })
  }

  const updatedata = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'this is task 12', description: 'this is task 12 discription' }),
  };

  const updateTask = () => {
    let id = 12;
    fetch("http://localhost:8000/tasks/"+ id + "/", updatedata)
      .then(response => {
        getTask();
      })
  }


  const delateTask = () => {
    let id = 7;
    fetch("http://localhost:8000/tasks/"+ id + "/", {method:'DELETE'})
      .then(response => {
        getTask();
      })
  }



  useEffect(() => {
    // addTask();
    // delateTask();
  }, [])

  return (
    <>

    </>
  );
}

export default App;
