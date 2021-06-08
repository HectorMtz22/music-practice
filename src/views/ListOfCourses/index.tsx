import { Fragment } from "react";
import { RouteComponentProps } from "@reach/router";
import { Course } from "components/Course";

export const ListOfCourses = (props: RouteComponentProps) => {
  return (
    <Fragment>
      <Course />
      {[1, 2, 3].map((courses) => (
        <Course key={courses} />
      ))}
    </Fragment>
  );
};
