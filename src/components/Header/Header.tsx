import { Logo } from '../Logo';
import { Toggler } from '../Toggler';
import classes from './Header.module.css';

export function Header(): JSX.Element {
  return (
    <header className={classes.header}>
      <Logo />
      <Toggler />
    </header>
  );
}
