import CoursesList from '../../components/courses/courses-list';
import classes from '@/styles/Home.module.css';

import { COURSES_API_PATH } from '../../secrets/keys';
import Link from 'next/link';

export default function Home(props) {
  return (
    <div className={classes.container}>
      <CoursesList items={props.courses} />
      <Link href='/courses/creation'>
        <button className={`${classes.btn} ${classes['btn-link']}`}>+ Add new course</button>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch(`${COURSES_API_PATH}`)

  const { courses } = await data.json();
  
  return {
    props: {
      courses
    },
    revalidate: 60
  };
}
