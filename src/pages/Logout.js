import { useEffect } from 'react/cjs/react.development';
import authService from '../services/authService';

function Logout() {

  useEffect(() => {
    logout();
  }, []);

  async function logout() {
    try {
      await authService.logout();
      window.location = '/product';
    } catch(err) {}
  }

  return null;
}

export default Logout
