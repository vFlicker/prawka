import classNames from 'classnames';
import { useEffect } from 'react';
import { apiService } from '~/services/api';
import classes from './ListPage.module.css';

export function ListPage(): JSX.Element {
  useEffect(() => {
    apiService
      .fetchData()
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Heading />
      <UserInfo />
      <List />
    </>
  );
}

function Heading(): JSX.Element {
  return (
    <div className={classes.heading}>
      <h1 className={classes.title}>Текущие правки</h1>
      <div className={classes.statusText}>Уже готово</div>
    </div>
  );
}

function UserInfo(): JSX.Element {
  const user = {
    avatarUrl: 'https://via.placeholder.com/40x40',
    name: 'Вика Ким',
    app: 'INSTABOSS',
  };

  return (
    <div className={classes.userInfoWrapper}>
      <img src={user.avatarUrl} alt={user.name} className={classes.avatar} />
      <div>
        <div className={classes.name}>{user.name}</div>
        <div className={classes.app}>{user.app}</div>
      </div>
    </div>
  );
}

function List(): JSX.Element {
  const data = [
    {
      id: '1',
      title: 'Изменить размер кнопки “Домой” на главной странице',
      status: 'ready',
      statusText: '💎 готово',
      filesCount: '4 файла',
    },
    {
      id: '2',
      title: 'Изменить размер кнопки “Домой” на главной странице',
      status: 'inProgress',
      statusText: '⏳ в процессе',
      filesCount: '4 файла',
    },
    {
      id: '3',
      title: 'Изменить размер кнопки “Домой” на главной странице',
      status: 'ready',
      statusText: '💎 готово',
      filesCount: '4 файла',
    },
    {
      id: '4',
      title: 'Изменить размер кнопки “Домой” на главной странице',
      status: 'inProgress',
      statusText: '⏳ в процессе',
      filesCount: '4 файла',
    },
    {
      id: '5',
      title: 'Изменить размер кнопки “Домой” на главной странице',
      status: 'inProgress',
      statusText: '⏳ в процессе',
      filesCount: '4 файла',
    },
    {
      id: '6',
      title: 'Изменить размер кнопки “Домой” на главной странице',
      status: 'inProgress',
      statusText: '⏳ в процессе',
      filesCount: '4 файла',
    },
    {
      id: '7',
      title: 'Изменить размер кнопки “Домой” на главной странице',
      status: 'inProgress',
      statusText: '⏳ в процессе',
      filesCount: '4 файла',
    },
    {
      id: '8',
      title: 'Изменить размер кнопки “Домой” на главной странице',
      status: 'inProgress',
      statusText: '⏳ в процессе',
      filesCount: '4 файла',
    },
    {
      id: '9',
      title: 'Изменить размер кнопки “Домой” на главной странице',
      status: 'inProgress',
      statusText: '⏳ в процессе',
      filesCount: '4 файла',
    },
    {
      id: '10',
      title: 'Изменить размер кнопки “Домой” на главной странице',
      status: 'inProgress',
      statusText: '⏳ в процессе',
      filesCount: '4 файла',
    },
  ];

  const list = data.map(({ id, title, status, statusText, filesCount }) => {
    const className = classNames(classes.itemStatus, classes[status]);

    return (
      <li key={id} className={classes.item}>
        <div className={classes.itemContent}>
          <p className={classes.itemTitle}>{title}</p>
          <div className={classes.itemFiles}>{filesCount}</div>
        </div>
        <div className={className}>{statusText}</div>
      </li>
    );
  });

  return <ul className={classes.list}>{list}</ul>;
}
