import { api } from "../config/api"

export const getCourses = () => {
  return api.get("/courses");
};

export const deleteCourse = (id) => {
  return api.delete(`/courses/${id}`);
};

export const putCourse = (data) => {
  return api.put(`/courses/${data.id}`, data);
}

export const postCourse = (data) => {
  return api.post('/courses', data)
}