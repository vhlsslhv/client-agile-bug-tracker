import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;

//http://localhost:5000/api/

/* PROJECT ROUTES */
export const getAllProjects = () => {
  return axios.get(`${baseURL}/projects`);
};

export const addProject = (project) => {
  return axios.post(`${baseURL}/projects`, project);
};

export const getProject = (projectId) => {
  return axios.get(`${baseURL}/projects/${projectId}`);
};

export const deleteProject = (projectId) => {
  return axios.delete(`${baseURL}/projects/${projectId}`);
};

export const updateProject = (updatedProject) => {
  return axios.put(`${baseURL}/projects/${updatedProject.id}`, updatedProject);
};

export const uploadFile = (uploadData) => {
  return axios.post(`${baseURL}/upload`, uploadData);
};

/* AUTHENTICATION API ROUTES */

export const signup = (user) => {
  return axios.post(`${baseURL}/signup`, user);
};


/* Every time we want to see on the frontend who is our 
logged in user we need to pass {withcredentials: true} */
  export const login = (user) => {
  return axios.post(`${baseURL}/login`, user, { withCredentials: true } );
};

/* We pass this so we can access to the stored session in the database
 and retrieve that session if the user is logged in */
export const loggedIn = ()=>{
  return axios.get(`${baseURL}/loggedin`, {withCredentials: true});
};

export const logout = () => {
  return axios.post(`${baseURL}/logout`, null, { withCredentials: true });
};