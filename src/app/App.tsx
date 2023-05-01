import { Header } from '~/components/Header';
import { FormPage } from '~/pages/FormPage';
// import { ListPage } from '~/pages/ListPage';

import classes from './App.module.css';
import './styles/index.css';

export function App(): JSX.Element {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <FormPage />
      </main>
    </>
  );
}
