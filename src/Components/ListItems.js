import { VscDiffRemoved } from "react-icons/vsc";

const ListItems = ({ task, deleteTask, index }) => {
  return (
    <li>
      {task}
      <VscDiffRemoved
        id={index} //TO make splice work
        onClick={deleteTask}
        className="remove-btn"
      />
    </li>
  );
};

export default ListItems;
