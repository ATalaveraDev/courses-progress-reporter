import { Fragment, useRef } from 'react';

export default function CourseCreationPage() {
  const title = useRef();
  const progress = useRef();

  function submitHandler(event) {
    event.preventDefault();
    
    const value = {
      title: title.current.value,
      progress: parseInt(progress.current.value)
    };
  }

  return (
    <Fragment>
      <h1>Course Creation Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input type="text" ref={title} />
        </div>
        <div>
          <label>Progress</label>
          <input type="number" min="0" max="100" ref={progress} />
        </div>
        <button>Save</button>
      </form>
    </Fragment>
  );
}