import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const save = () => {
    if (!text.trim()) return;
    
    if (editId) {
      setItems(items.map(item => 
        item.id === editId ? { ...item, text } : item
      ));
      setEditId(null);
    } else {
      setItems([...items, { id: Date.now(), text }]);
    }
    setText("");
  };

  const edit = (item) => {
    setText(item.text);
    setEditId(item.id);
  };

  const remove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD App</h1>
      
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={save}>
        {editId ? "Update" : "Add"}
      </button>
      {editId && <button onClick={() => { setEditId(null); setText(""); }}>Cancel</button>}

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => edit(item)}>Edit</button>
            <button onClick={() => remove(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
