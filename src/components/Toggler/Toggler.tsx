import classNames from 'classnames';
import { useState } from 'react';

import classes from './Toggler.module.css';

export function Toggler(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const className = classNames(classes.button, {
    [classes.active]: isOpen,
  });

  return (
    <button className={className} onClick={handleClick}>
      <span className="visually-hidden">Переключить форму</span>
    </button>
  );
}
