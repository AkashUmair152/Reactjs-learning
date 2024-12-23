const Todoitem1 = () => {
  return (
    <div className="row c-row">
      <div className="col-6">
        <div className="task">First Task</div>
      </div>
      <div className="col-4">
        <div className="task">18/12/2024</div>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger btn task">
          delete
        </button>
      </div>
    </div>
  );
};

export default Todoitem1;
