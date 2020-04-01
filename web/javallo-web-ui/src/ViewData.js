import Course from "./course/Course";

export default class ViewData {
  viewType: string;
  course: Course;

  static create(viewType: string, course: Course): ViewData {
    return {viewType: viewType, course: course};
  }
}