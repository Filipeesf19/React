import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  //Check if a list exist first, because it will give an error if you JSON.parse a null
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage()); //items container

  // add item button
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems); //update the state
    setLocalStorage(newItems); //update the local storage
    toast.success("item added to the list");
  };

  // delete item button
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems); //update the state
    setLocalStorage(newItems); //update the local storage
    toast.success("item removed from the list");
  };

  //edit the item that is checked and update it its state and local storage (item.completed goes from false to true)
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }; //maintain the rest of the properties and just change the "completed" property
        return newItem;
      }
      return item;
    });
    setItems(newItems); //update the state
    setLocalStorage(newItems); //update the local storage
  };

  return (
    <section className="section-center">
      <ToastContainer />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
