import { CourseModel } from "models/Courses";
import courses from "data/courses.json";

export const getCourses = async () => {
  const response: CourseModel[] = courses;
  return response;
};

export const getCourse = async (id: number) => {
  const response = courses.find((course: CourseModel) => course.id === id);
  console.log(response);
  if (response != null) {
    return response;
  }
  throw new Error("No funciona");
};
