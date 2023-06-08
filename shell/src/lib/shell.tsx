import AppProvider from 'shell/src/lib/app-provider/app-provider';
import bootstrap from 'localization/src/config';

/* eslint-disable-next-line */
export interface ShellProps {}

bootstrap();

export function Shell(props: ShellProps) {
  return <AppProvider />;
}

export default Shell;
