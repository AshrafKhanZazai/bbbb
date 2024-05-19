import  { useState } from "react";
function Todo() {



 const [items, setItems] = useState([]);
 const [input, setInput] = useState("");
 const handleAddItem = () => {
  if (input) {
   setItems([...items, input]);
   setInput("");
  }
 };


 const handleRemoveItem = (index) => {
  const newItems = [...items];
  newItems.splice(index, 1);
  setItems(newItems);
 };





 return (
  <>
   <div className="container mt-5 flex">
    <input
     className="form-control w-50"
     type="text"
     value={input}
     onChange={(e) => setInput(e.target.value)}
    />
    <button className="btn btn-info" onClick={handleAddItem}>Add</button>
   </div>
   <div className="container mt-8 ml-4">
    <ul className="ml-5">
     {items.map((item, index) => (
      <li key={index}>
       {item}
       <button className="btn btn-danger" onClick={() => handleRemoveItem(index)}>Remove</button>
      </li>
     ))}
    </ul>
   </div>
  </>
 );
}
export default Todo;

