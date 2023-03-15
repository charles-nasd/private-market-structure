import { AnimatedPageWrapper } from '../../components';
import styles from './RouteNotFound.module.scss';

const RouteNotFound = () => {
  return (
    <AnimatedPageWrapper>
      <div className={styles.container}>
        <h1>RouteNotFound</h1>
      </div>
    </AnimatedPageWrapper>
  );
};

export default RouteNotFound;
