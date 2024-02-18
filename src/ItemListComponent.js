const ItemListComponent = (props) => {
  return (
    <li>
      {props.name}  <span className="close" onClick={() => props.deleteItem(props.id)}>{"\u00D7"}</span>
    </li>
  );
}

export default ItemListComponent;