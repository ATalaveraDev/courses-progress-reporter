export class Course {
  constructor(title, progress) {
    this.title = title;
    this.progress = parseInt(progress);
  }

  toJSON() {
    return JSON.stringify(this);
  }

  isValid() {
    return this.title && this.progress;
  }
}