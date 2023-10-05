import { useRouter } from 'next/router';

import { Fragment } from 'react';
import { getCourseById } from '../../../mock-data';

function CoursePage() {
  const router = useRouter();

  const courseId = parseInt(router.query.id);

  const { id, title, progress} = getCourseById(courseId);

  return <Fragment>
    <h1>{title}</h1>
    <label>Your current progress is {progress} %</label>
  </Fragment>;
}

export default CoursePage;