import CoursesList from '../../../components/courses/courses-list';

import classes from './index.module.css';

function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: 'Kubernetes basic',
      progress: 100
    },
    {
      id: 2,
      title: 'nextjs',
      progress: 30
    }
  ];

  return <div>
    <h1>Courses Page</h1>
    <div className={classes.container}>
      <CoursesList items={courses} />
    </div>
  </div>
}

export default CoursesPage;