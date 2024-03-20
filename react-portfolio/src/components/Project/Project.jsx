import React from 'react';



function Project(props) {

    console.log("PRops: ", props)
    // { data: projects, bingo: "bingo"}
  return (
    <>
        <div>Project Component</div>
        <h2>TItle: {props.data.title}</h2>
        <h2>{props.data.description}</h2>
    
    </>
  )
}

export default Project

