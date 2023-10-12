import { Fragment, useRef, useState } from 'react';
import { COURSES_API_PATH } from '../../../secrets/keys';
import { useRouter } from 'next/router';
import { Course } from '@/models/course';
import globalClasses from '@/styles/Home.module.css';
import moduleClasses from './courses.module.css';

export default function CourseCreationPage() {
  const [submitError, setSubmitError] = useState(false);
  const [focusedField, setFocusedField] = useState();
  const title = useRef();
  const progress = useRef();
  const router = useRouter();

  function focusHandler(element) {
    setFocusedField(element);
  }

  async function submitHandler(event) {
    event.preventDefault();
    
    const course = new Course(title.current.value, progress.current.value);

    if (course.isValid()) {
      await fetch(`${COURSES_API_PATH}`, {
        method: 'POST',
        body: course.toJSON(),
        'Content-Type': 'application/json',
      });

      router.push('/');
    } else {
      setSubmitError(true);
    }
  }

  return (
    <div
      className={`${globalClasses.container} ${moduleClasses['creation-container']}`}
    >
      <h1 className={moduleClasses.title}>Course Creation Page</h1>
      <form className={moduleClasses['creation-form']} onSubmit={submitHandler}>
        <div className={`${moduleClasses.field} ${focusedField === 'title' && moduleClasses.focused}`}>
          <label>Title</label>
          <input type='text' ref={title} onFocus={() => focusHandler('title')} />
        </div>
        <div className={`${moduleClasses.field} ${focusedField === 'progress' && moduleClasses.focused}`}>
          <label>Progress</label>
          <input type='number' min='0' max='100' ref={progress} onFocus={() => focusHandler('progress')} />
        </div>
        <div className={moduleClasses.action}>
          <button
            className={`${globalClasses.btn} ${globalClasses['btn-submit']}`}
          >
            Save
          </button>
        </div>
      </form>
      {submitError && (
        <p className={`${globalClasses.error} ${moduleClasses.error}`}>
          Submition canceled due to some error in your form
        </p>
      )}
    </div>
  );
}