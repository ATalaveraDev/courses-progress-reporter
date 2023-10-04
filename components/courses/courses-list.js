import Course from './course';

import classes from './courses-list.module.css';

function CoursesList(props) {
  return <ul>
    {props.items.map(item => <Course key={item.id} title={item.title} progress={item.progress} />)}
  </ul>
}

export default CoursesList;