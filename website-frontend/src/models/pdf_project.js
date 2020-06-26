import Project from "./project";

export default class PDFProject extends Project {
  constructor(data) {
    super(data);

    this.location = data.location;
  }

  navigate() {
    window.open(this.location, "_blank");
  }
}
