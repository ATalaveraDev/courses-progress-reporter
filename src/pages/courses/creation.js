import { Fragment, useRef } from 'react';
import { COURSES_API_PATH } from '../../../secrets/keys';
import { useRouter } from 'next/router';

export default function CourseCreationPage() {
  const title = useRef();
  const progress = useRef();
  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();
    
    const value = {
      title: title.current.value,
      progress: parseInt(progress.current.value)
    };

    await fetch(`${COURSES_API_PATH}`, {
      method: 'POST',
      body: JSON.stringify(value),
      'Content-Type': 'application/json',
    });

    router.push('/');
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