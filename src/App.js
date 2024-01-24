import { useState } from "react";
function App() {

  const[formData, setFormData] = useState({
    name: "", email: "", interest1: false, interest2: false, interest3: false
  })

  const [wasSubmitted, setWasSubmitted] = useState(false)

  const changeInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setWasSubmitted(true)
  }

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" onChange={changeInput} value={formData.name} id="name"/>
          <label>{formData.name}</label>
          <input type="text" name="email" onChange={changeInput} value={formData.email} id="email"/>
          <label>{formData.email}</label>
        </div>
        

        <div>
            <input type="checkbox" name="interest1" onChange={changeInput} value={formData.interest1}/>
            <input type="checkbox" name="interest2" onChange={changeInput} value={formData.interest2}/>
            <input type="checkbox" name="interest3" onChange={changeInput} value={formData.interest3}/>
        </div>

        <button type="submit">Submit</button>

      </form>

      <h3>{wasSubmitted ? "Done!" : null}</h3>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
    </main>
  );
}

export default App;
