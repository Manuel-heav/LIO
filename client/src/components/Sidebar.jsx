import React from 'react'
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar">
        <h2>Browse Issues</h2>
        <div className="sidebar__issue__container">
            <p>All</p>
            <h3>1200</h3>
        </div>
        <div className="sidebar__issue__container">
            <p>Politics</p>
            <h3>768</h3>
        </div>
        <div className="sidebar__issue__container">
            <p>Relationship</p>
            <h3>331</h3>
        </div>
        <div className="sidebar__issue__container">
            <p>LGBTQ+</p>
            <h3>145</h3>
        </div>
        <div className="sidebar__issue__container">
            <p>Life</p>
            <h3>23</h3>
        </div>
        <div className="sidebar__issue__container">
            <p>Job</p>
            <h3>12</h3>
        </div>
        <div className="sidebar__issue__container">
            <p>Family</p>
            <h3>230</h3>
        </div>
        <div className="sidebar__issue__container">
            <p>Sex</p>
            <h3>990</h3>
        </div>
        <div className="sidebar__issue__container">
            <p>Health</p>
            <h3>23</h3>
        </div>
    </div>
  )
}

export default Sidebar