import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return async () => {
    localStorage.removeItem('token');
    queryClient.removeQueries();
    navigate('/auth/login');
  };
}
