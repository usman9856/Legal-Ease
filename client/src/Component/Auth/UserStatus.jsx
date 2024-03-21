import { useState } from 'react';

// Custom hook to manage user type and login status
function UserAuth() {
  const [userType, setUserType] = useState('user');
  const [loginStatus, setLoginStatus] = useState(true);



  const getUserStatus = () => {
    return userType;
  };

  const getLoginStatus=() => {
 return loginStatus;
  };
  const updateUser = (type) => {
    setUserType(type);
  };

  const updateLoginStatus=() => {
    console.log('update login called')
    setLoginStatus(!loginStatus);
  };

  return {
    getUserStatus,
    getLoginStatus,
    updateUser,
    updateLoginStatus,
  };
}

export default UserAuth;
