import classNames from 'classnames';
import { FormEvent } from 'react';
import { ImageUploader } from '~/components/ImageUploader';
import classes from './FormPage.module.css';

export function FormPage(): JSX.Element {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    // const form = evt.target;
    // const formData = new FormData(form);

    // const formJson = Object.fromEntries(formData.entries());

    // console.log(formJson);
  };

  return (
    <>
      <h1>Добавить правку</h1>
      <form
        action="#"
        method="post"
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <div className={classes.inputsWrapper}>
          <input
            type="text"
            name="title"
            placeholder="В одно предложение, что нужно сделать?"
            className={classes.input}
          />
          <input
            type="text"
            name="link"
            placeholder="Ссылка на страницу"
            className={classNames(classes.input, classes.blue)}
          />
          <textarea
            name="description"
            placeholder="А теперь расскажите подробнее"
            className={classes.textarea}
          />
        </div>
        <div className={classes.fileWrapper}>
          <div className={classes.legend}>
            Добавьте скриншоты в JPEG или PNG
          </div>
          <ImageUploader />
        </div>
        <div>
          <div className={classes.legend}>Приоритет</div>
          <ul className={classes.radioList}>
            {[1, 2, 3, 4, 5].map((id) => (
              <li key={id} className={classes.radioItem}>
                <label>
                  <input
                    type="radio"
                    name="priority"
                    value={id}
                    className={classes.radioInput}
                  />
                  <span className={classes.radioLabel}>{id}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <button type="submit" className={classes.button}>
          Добавить правку
        </button>
      </form>
    </>
  );
}
