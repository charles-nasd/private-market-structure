import { AnimatedPageWrapper } from '../../components';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <AnimatedPageWrapper>
      <div className={styles.container}>
        <h1>Login</h1>
      </div>
    </AnimatedPageWrapper>
  );
};

export default Login;
