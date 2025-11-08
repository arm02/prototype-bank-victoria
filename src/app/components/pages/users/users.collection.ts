export interface UserResponseCollection {
  user_id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export class CreateUserRequest {
  user_id: string = '';
  email: string = '';
  password: string = '';
  name: string = '';
  role: string = '';
}

export const UserRoleColectionData = [
  {
    label: 'Admin',
    value: 'admin'
  },
  {
    label: 'User',
    value: 'user'
  },
  {
    label: 'Editor',
    value: 'editor'
  },
  {
    label: 'Researcher',
    value: 'researcher'
  }
]