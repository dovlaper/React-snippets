import BaseService from './BaseService';

const ENDPOINTS = {
  REGISTER: 'api/sign-up-admin',
  INVITE_ADMIN: 'api/admin/invite-admin',
  VALIDATE_TOKEN: 'api/validate-token/',
  ADMIN_LIST: 'api/admin/admins'
};

export class AdminService extends BaseService {
  sendInvite = inviteData => {
    return this.api.post(ENDPOINTS.INVITE_ADMIN, inviteData);
  };

  registerAdmin = registerData => {
    return this.api.post(ENDPOINTS.REGISTER, registerData);
  };

  validateToken = token => {
    return this.api.post(ENDPOINTS.VALIDATE_TOKEN, token);
  };

  getAdmins = () => {
    return this.api.get(ENDPOINTS.ADMIN_LIST);
  };
}

const adminService = new AdminService();
export default adminService;
