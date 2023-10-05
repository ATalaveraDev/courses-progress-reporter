export const COURSES = [
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

export function getCourseById(id) {
  return COURSES.filter(element => element.id === id)[0];
}