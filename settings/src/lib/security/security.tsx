import styles from './security.module.scss';

/* eslint-disable-next-line */
export interface SecurityProps {}

export function Security(props: SecurityProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Security!</h1>
    </div>
  );
}

export default Security;
