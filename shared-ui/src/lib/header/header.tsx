import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={'tw-bg-red-500'}>
      <div>picket</div>
      <div>item</div>
      <div>user</div>
    </div>
  );
}

export default Header;
