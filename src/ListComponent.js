import { useState } from 'react';

import ItemListComponent from './ItemListComponent';

const ListComponent = () => {
  const defaultList = [
    {id: 1, name: "first ToDo"},
    {id: 2, name: "second ToDo"},
    {id: 3, name: "third ToDo"},
    {id: 4, name: "fourth ToDo"},
  ];

  const [input, setInput] = useState('');
  const [item, setItem] = useState(defaultList);
  const [id, setId] = useState(defaultList.length + 1);

  const onClickHandler = (input) => {
    if (input.length > 0) {  
      
      setId(prevState => prevState + 1);

      const newInput = {id: id, name:input};
      const updatedElement = [...item, newInput];

      setItem(updatedElement);
      setInput('');     
    }
  }

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClickHandler(input);
    }
  }

  const deleteItem = (id) => {
    const updatedItems = item.filter((element) => element.id !== id);
    setItem(updatedItems);
  }

  return (
   <>
    <input onChange={onChangeHandler} onKeyDown={handleKeyDown} value={input} ></input>
    <h4>{item.length}</h4>
    <ul>
        {item.map((element) => (
          <ItemListComponent key={element.id} name={element.name} id={element.id} deleteItem={deleteItem}/>
        ))}
    </ul>
    <button className="add" onClick={() => onClickHandler(input)}>Add new ToDo</button>
   </>
  );
}

export default ListComponent;