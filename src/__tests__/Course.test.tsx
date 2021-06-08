import { Course } from "components/Course";
import { CourseModel } from "models/Courses";
import { create } from "react-test-renderer";

let component: any;
let data: CourseModel = {
  id: 1,
  title: "title",
  description: "description",
  price: "100",
  img: "img",
};

describe("<Course />", () => {
  beforeEach(() => {
    component = create(<Course {...data} />);
  });
  it("Renderiza", () => {
    expect(component).toBeDefined;
    expect(component.root.props.id).toBe(data.id);
    expect(component.root.props.title).toBe(data.title);
    expect(component.root.props.description).toBe(data.description);
    expect(component.root.props.img).toBe(data.img);
    expect(component.root.props.price).toBe(data.price);
  });
});
