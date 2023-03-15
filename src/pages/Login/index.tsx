import { Link } from 'react-router-dom';

import { AnimatedPageWrapper } from '../../components';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <AnimatedPageWrapper>
      <div className={styles.container}>
        <h1>Login</h1>

        <div className={styles.buttonWrapper}>
          <button>
            <Link to="/landing-page">Landing Page</Link>
          </button>
          <button>
            <Link to="/portal">Portal</Link>
          </button>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default Login;
