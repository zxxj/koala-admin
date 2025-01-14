interface UserEntity {
  id: number;
  username: string;
  password: string;
  nickname: string;
  avatar: string;
  email: string;
  mobile: string;
  description: string;
  sortIndex: number;
  enabled: string;
  systemic: string;
  createdBy: number;
  createdDate: number;
  lastModifiedBy: number;
  lastModifiedDate: number;
}

export default UserEntity;
