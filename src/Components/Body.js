// import{RiCloseCircleLine} from "react-icons/ri"

const Body = (props) => {
  return (
    <div className={ props.todo.completed ? "rowCompleted": "showBar"}>
        {props.todo.text} 
        <div className="icons">
        <span onClick={()=> props.deleteTodo(props.todo.id)} >&times;</span>
        <span onClick={()=> props.markTodo(props.todo.id)}>✔</span>
        </div>
    </div>
  );
}
 
export default Body;