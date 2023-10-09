import { useRouter } from 'next/router';

import { Fragment } from 'react';
import { getCourseById } from '../../../mock-data';

import classes from './courses.module.css';
import Link from 'next/link';

function CoursePage() {
  const router = useRouter();

  const courseId = parseInt(router.query.id);

  const { id, title, progress} = getCourseById(courseId);

  return <Fragment>
    <section className={classes['course-container']}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.data}>
        <label>Your current progress is {progress} %</label>
      </div>
      <div className={classes['navigate-container']}>
        <Link className={classes.navigate} href='/'><span>Browse Courses</span></Link>
      </div>
    </section>
  </Fragment>;
}

export default CoursePage;