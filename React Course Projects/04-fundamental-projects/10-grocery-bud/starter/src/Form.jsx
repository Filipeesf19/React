import { useState } from "react";
import { toast } from "react-toastify";

function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState(""); // item added

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      // if there is not value, don't do anything
      toast.error("please provide a value");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName} //controlled input (match state value with input value)
          onChange={(event) => setNewItemName(event.target.value)} //controlled input (match state value with input value)
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
}

export default Form;
