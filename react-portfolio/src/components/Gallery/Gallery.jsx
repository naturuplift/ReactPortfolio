import React, { useState, useEffect } from 'react'
import Project from '../Project/Project';


function Gallery() {

    const [projects, setProjects] = useState([
        { title: "test", description: "testing testing"},
        { title: "proj2", description: "project 2 working on it"},
        { title: "proj 3", description: "project3 stuff"}
    ]);

    const handleClick = (event) => {
        console.log(event.target)
    }

  return (
    <>
        <div className='container'>Gallery</div>
        { projects.map((item, idx) => (

            <Project onClick={handleClick} data={item} key={idx} />
        ))}
    
    </>
  )
}

export default Gallery