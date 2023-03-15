import { Link } from 'react-router-dom';

import { AnimatedPageWrapper } from '../../components';
import styles from './Portal.module.scss';
import useAuth from '../../hooks/useAuth';

const Portal = () => {
  const { toggleAuth } = useAuth();

  return (
    <AnimatedPageWrapper>
      <div className={styles.container}>
        <h1>Portal</h1>

        <div className={styles.buttonWrapper}>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button onClick={toggleAuth}>
            <Link to="/">Log out</Link>
          </button>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default Portal;
