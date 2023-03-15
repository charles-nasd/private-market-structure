import { Link } from 'react-router-dom';

import { AnimatedPageWrapper } from '../../components';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <AnimatedPageWrapper>
      <div className={styles.container}>
        <h1>Landing Page</h1>

        <div className={styles.buttonWrapper}>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default LandingPage;
