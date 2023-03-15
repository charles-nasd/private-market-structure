import { Link } from 'react-router-dom';

import { AnimatedPageWrapper } from '../../components';
import styles from './RouteNotFound.module.scss';

const RouteNotFound = () => {
  return (
    <AnimatedPageWrapper>
      <div className={styles.container}>
        <h1>RouteNotFound</h1>

        <div className={styles.buttonWrapper}>
          <button>
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default RouteNotFound;
