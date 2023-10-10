import CoursesList from '../../components/courses/courses-list';
import classes from '@/styles/Home.module.css'

import { COURSES } from '../../mock-data';

export default function Home(props) {
  return (
    <div className={classes.container}>
      <CoursesList items={props.courses} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await (await fetch('https://nextjs-courses-api-default-rtdb.europe-west1.firebasedatabase.app/courses.json')).json();
  const data = [];

  for (const key in response) {
    data.push({ 
      id: key,
      ...response[key]
    });
  }
  
  return {
    props: {
      courses: [...data]
    },
    revalidate: 60
  };
}
