import { Fragment, useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Course } from "components/Course";
import { getCourses } from "api/courses";
import { CourseModel } from "models/Courses";

export const ListOfCourses = (props: RouteComponentProps) => {
  const [data, setData] = useState<CourseModel[]>([]);

  useEffect(() => {
    getCourses().then((response: CourseModel[]) => {
      setData(response);
    });
  }, []);

  return (
    <Fragment>
      {data.map((courses) => (
        <Course key={courses.id} {...courses} />
      ))}
    </Fragment>
  );
};
