// UserStatus.jsx
import { useState } from 'react';

export const useUserStatus = () => {
  const [userType, setUserType] = useState('admin');

  return userType;
};

export const useLoginStatus = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  return loginStatus;
};
