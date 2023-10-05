import Link from 'next/link';
import classes from './course.module.css';

function Course(props) {
  const courseLink = `/courses/${props.id}`;
  const formattedProgress = `${props.progress} %`;

  return <Link href={courseLink}>
    <li className={classes.container}>
      <div className={classes.title}>
          <p>{props.title}</p>
      </div>
      <div className={classes.progress}>
        <p>{formattedProgress}</p>
      </div>
    </li> 
  </Link>;
}

export default Course;