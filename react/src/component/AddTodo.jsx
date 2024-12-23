const AddTodo = () => {
  return (
    <div className="row c-row">
      <div className="col-6">
        <input type="text" placeholder="Enter todo" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-primary btn task">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
