import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Tasks from './Components/Tasks/Tasks';
import AddTasks from './Components/Tasks/AddTask';

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([ ])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])


  // Fetch all tasks
  const fetchTasks = async () => {
    // const res = await fetch('https://shine-island-canopy.glitch.me/tasks');
    const res = await fetch('http://localhost:8000/tasks');
    const data = await res.json();
    return data;
  }
  

  // Fetch one task
  const fetchTask = async (id) => {
    // const res = await fetch(`https://shine-island-canopy.glitch.me/tasks/${id}`);
    const res = await fetch(`http://localhost:8000/tasks/${id}`);
    const data = await res.json();
    return data;
  }


