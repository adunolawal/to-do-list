import { useState } from "react";

const Nav = (props) => {

  const [input, setInput] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    props.addTodo(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={input}
        className="addInput" type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a Todo"/> 
      <button type="submit" className="btn">Add Todo</button>
    </form>
  );
}

export default Nav;