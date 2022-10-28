const Task = ({ tarea }) => {
  return (
    <div>
      <h4>{tarea.title}</h4>
      <p>{tarea.desc}</p>
    </div>
  );
};

export default Task;
