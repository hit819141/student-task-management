import React from 'react'
import '../index.css';

function Navbar({onLogout, onAddTaskToggle = true, isAddTASKformopen}) {
  return (
    <nav className="navbar">
        <div className="navbar-brand">
        <h1>Task manager</h1>
         </div>

        <div className="navbar-actions">
            <button className="btn.primary">
            Add Task
             </button>

            <button className="btn-seccondary">
            Logout
            </button>
         </div>
    </nav>
  )
}

export default Navbar
