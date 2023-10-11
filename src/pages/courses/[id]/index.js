import { Fragment } from 'react';

import classes from '../courses.module.css';
import Link from 'next/link';

import { FIREBASE_PATH } from '../../../../secrets/keys.js';

function CoursePage(props) {
  if (!props.course) {
    return <div>Loading</div>
  }

  return <Fragment>
    <section className={classes['course-container']}>
      <h1 className={classes.title}>{props.course.title}</h1>
      <div className={classes.data}>
        <label>Your current progress is {props.course.progress} %</label>
      </div>
      <div className={classes['navigate-container']}>
        <Link className={classes.navigate} href='/'><span>Browse Courses</span></Link>
      </div>
    </section>
  </Fragment>;
}

export async function getStaticProps(context) {
  const courseId = context.params.id;
  const response = await (await fetch(`${FIREBASE_PATH}/${courseId}.json`)).json();

  return {
    props: {
      course: { ...response }
    }
  };
}

// this should be improved for real use case
export async function getStaticPaths() {
  const response = await (await fetch(`${FIREBASE_PATH}.json`)).json();
  const data = [];
  
  for (const key in response) {
    data.push({ params: { id: key } });
  }

  return {
    paths: data,
    fallback: true
  };
}

export default CoursePage;