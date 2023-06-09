import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { Header } from '~/components/Header';
import { FormPage } from '~/pages/FormPage';
import { ListPage } from '~/pages/ListPage';

import 'react-toastify/dist/ReactToastify.css';
import classes from './App.module.css';
import './styles/index.css';

export function App(): JSX.Element {
  const [isFormView, setIsFormView] = useState(false);

  const handleToggle = () => setIsFormView(!isFormView);

  const content = isFormView ? <FormPage /> : <ListPage />;

  return (
    <>
      <ToastContainer />
      <Header isOpen={isFormView} onToggle={handleToggle} />
      <main className={classes.main}>{content}</main>
    </>
  );
}
