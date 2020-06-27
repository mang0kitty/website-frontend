import Project from "./project";
import router from "../router";

export default class BlogProject extends Project {
  constructor(data) {
    super(data);

    this.image = data.image;
  }

  navigate() {
    router.push({ name: "blog-post", params: { id: this.a } });
  }
}
