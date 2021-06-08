import { CourseModel } from "models/Courses";
import courses from "data/courses.json";

export const getCourses = async () => {
  const response: CourseModel[] = courses;
  return response;
};
