import api from './api';

export class ProjectAPI {
  static async getProjects() {
    let projectsRespone = await api.get('/projects');
    return projectsRespone.data.projects;
  }

  static async getProject(projectsId) {
    let projectRespone = await api.get(`/projects/${projectsId}`);
    return projectRespone.data.project;
  }
}
