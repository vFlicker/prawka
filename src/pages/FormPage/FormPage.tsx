import classNames from 'classnames';
import { MouseEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { ImageUploader } from '~/components/ImageUploader';
import { apiService } from '~/services/api';

import classes from './FormPage.module.css';

export function FormPage(): JSX.Element {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [priority, setPriority] = useState('1');

  const handleSubmit = async (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    const formData = new FormData();

    formData.append('title', title);
    formData.append('link', link);
    formData.append('description', description);
    formData.append('priority', priority);

    images.forEach((image) => formData.append('images', image));

    try {
      await apiService.postData(formData);

      toast.success('😎 правка добавлена', {
        position: toast.POSITION.TOP_CENTER,
        className: 'toast-message',
        autoClose: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Добавить правку</h1>
      <form className={classes.form}>
        <div className={classes.inputsWrapper}>
          <input
            type="text"
            name="title"
            placeholder="В одно предложение, что нужно сделать?"
            className={classes.input}
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
          />
          <input
            type="text"
            name="link"
            placeholder="Ссылка на страницу"
            className={classNames(classes.input, classes.blue)}
            value={link}
            onChange={(evt) => setLink(evt.target.value)}
          />
          <textarea
            name="description"
            placeholder="А теперь расскажите подробнее"
            className={classes.textarea}
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
          />
        </div>
        <div className={classes.fileWrapper}>
          <div className={classes.legend}>
            Добавьте скриншоты в JPEG или PNG
          </div>
          <ImageUploader images={images} setImages={setImages} />
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
                    checked={Number(priority) === id}
                    onChange={(evt) => setPriority(evt.target.value)}
                  />
                  <span className={classes.radioLabel}>{id}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <button type="submit" className={classes.button} onClick={handleSubmit}>
          Добавить правку
        </button>
      </form>
    </>
  );
}
