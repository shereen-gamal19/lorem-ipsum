import React, { useState } from 'react';
import data from './data';
function App() {
  const [count , setCount] = useState(0)
  const [text , setText]  = useState([])

  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("hi")
    //here if we want to find the type of the count then we will find that it is a string so that we will convert the count from string to number by using parseInt
    let Amount = parseInt(count)
    console.log(typeof Amount);
    if (count < 0) {
      Amount = 1
      setText(data.slice(0,Amount));
    }
    if (count >=8){
      Amount = 8    
      setText(data.slice(0,Amount));
    } 
    setText(data.slice(0,Amount));
  }
  return (
  <section className='section-center'>
    <h3>lorem ipsum project setup</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>Paragraphs : </label>
      <input type='number' name='amount' id ='amount' value={count} onChange={(e)=> setCount(e.target.value)}></input>
      <button type='submit' className='btn'>generate</button>
    </form>
    <article className='lorem-text'>
      {text.map((item , index)=>{
        return(
          <p key={index}>{item}</p>
        )

      })}
      
    </article>
  </section>
    )
}

export default App;
