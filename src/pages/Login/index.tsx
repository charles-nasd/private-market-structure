import { Link } from 'react-router-dom';

import { AnimatedPageWrapper } from '../../components';
import styles from './Login.module.scss';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { toggleAuth } = useAuth();

  return (
    <AnimatedPageWrapper>
      <div className={styles.container}>
        <h1>Login</h1>

        <div className={styles.buttonWrapper}>
          <button>
            <Link to="/landing-page">Landing Page</Link>
          </button>
          <button onClick={toggleAuth}>
            <Link to="/portal">Portal</Link>
          </button>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default Login;
