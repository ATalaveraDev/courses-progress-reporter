import CoursesList from '../../components/courses/courses-list';
import classes from '@/styles/Home.module.css'

import { COURSES } from '../../mock-data';

export default function Home() {
  const courses = [...COURSES];

  return (
    <div className={classes.container}>
      <CoursesList items={courses} />
    </div>
  );
}
