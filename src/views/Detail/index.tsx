import { Fragment, useEffect, useState } from "react";
import { Redirect, RouteComponentProps } from "@reach/router";
import { getCourse } from "api/courses";
import { Course } from "components/Course";
import { CourseModel } from "models/Courses";

type Params = {
  id: string;
};

export const Detail = ({ id }: RouteComponentProps<Params>) => {
  const [data, setData] = useState<CourseModel>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id != null) {
      getCourse(parseInt(id))
        .then((course: CourseModel) => {
          setData(course);
          setLoading(false);
        })
        .catch(() => setError(true));
    }
  }, [id]);
  if (error) {
    window.location.href = "/";
  }
  if (loading) {
    return (
      <Fragment>
        <h1>Cargando</h1>
      </Fragment>
    );
  }
  if (!data) {
    return null;
  }
  return (
    <Fragment>
      <Course {...data} />
    </Fragment>
  );
};
