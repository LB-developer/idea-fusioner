import { useState } from "react"

export default function NewIdeaForm() {
  const [text, setText] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idea">Idea</label>
        <input type="text" name="idea" id="idea" value={text} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}