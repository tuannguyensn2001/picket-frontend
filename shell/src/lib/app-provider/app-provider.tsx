import styles from './app-provider.module.scss';

/* eslint-disable-next-line */
export interface AppProviderProps {}

export function AppProvider(props: AppProviderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppProvider!</h1>
    </div>
  );
}

export default AppProvider;
