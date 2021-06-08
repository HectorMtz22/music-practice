import { create } from "react-test-renderer";
import App from "App";

let component: any;

describe("<App />", () => {
  beforeEach(() => {
    component = create(<App />);
  });
  it("Renderiza completamente", () => {
    expect(component).toHaveBeenCalled;
  });
});
