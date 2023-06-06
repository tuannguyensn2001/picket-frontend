import AppProvider from 'shell/src/lib/app-provider/app-provider';

/* eslint-disable-next-line */
export interface ShellProps {}

export function Shell(props: ShellProps) {
  return <AppProvider />;
}

export default Shell;
