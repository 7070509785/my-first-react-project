import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
<div>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onnameChange={(e) => setName(e.target.value)}
        />
      </label>
      </div>
      <div>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      </div>

    </form>
  )
}
export default MyForm;