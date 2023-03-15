import { AnimatedPageWrapper } from '../../components';
import styles from './Portal.module.scss';

const Portal = () => {
  return (
    <AnimatedPageWrapper>
      <div className={styles.container}>
        <h1>Portal</h1>
      </div>
    </AnimatedPageWrapper>
  );
};

export default Portal;
