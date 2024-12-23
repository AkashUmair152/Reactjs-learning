const Time = () => {
    const time = new Date();
  
    return (
      <>
        <h5>
          This is the current time in Pakistan: {time.toLocaleTimeString()} Date: {time.toLocaleDateString()}
        </h5>
      </>
    );
  };
  
  export default Time;
  