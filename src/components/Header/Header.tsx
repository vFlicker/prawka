import { Logo } from '../Logo';
import { Toggler } from '../Toggler';
import classes from './Header.module.css';

type HeaderProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function Header({ isOpen, onToggle }: HeaderProps): JSX.Element {
  return (
    <header className={classes.header}>
      <Logo />
      <Toggler isOpen={isOpen} onToggle={onToggle} />
    </header>
  );
}
