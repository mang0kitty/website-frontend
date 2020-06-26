export default class Project {
  constructor({ name, description, tags }) {
    this.name = name;
    this.description = description;
    this.tags = tags;
  }

  get id() {
    return this.name.toLowerCase().replace(/[^\w\d-]/g, "-");
  }

  navigate() {
    throw new Error("Not implemented");
  }
}
