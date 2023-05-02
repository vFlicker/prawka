import classNames from 'classnames';

import classes from './Toggler.module.css';

type TogglerProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function Toggler({ isOpen, onToggle }: TogglerProps): JSX.Element {
  const className = classNames(classes.button, {
    [classes.active]: isOpen,
  });

  return (
    <button className={className} onClick={onToggle}>
      <span className="visually-hidden">Переключить форму</span>
    </button>
  );
}
