import classes from './course.module.css';

function Course(props) {
  const formattedProgress = `${props.progress} %`;

  return <li className={classes.container}>
    <div className={classes.title}>
      <p>{props.title}</p>
    </div>
    <div className={classes.progress}>
      <p>{formattedProgress}</p>
    </div>
  </li>
}

export default Course;