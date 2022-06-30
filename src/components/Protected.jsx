import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import auth from '../firebase.init'

function Protected({ children }) {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  if (loading) return 'loading...'
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
    // return navigate('/login', { replace: true })
  }
  return children;
}

export default Protected