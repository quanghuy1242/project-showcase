import api from './api';

export class ProjectAPI {
  static async getProjects() {
    let projectRespone = await api.get('/projects');
    return projectRespone.data.projects;
  }
}
