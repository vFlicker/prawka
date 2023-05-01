import classNames from 'classnames';
import { ChangeEvent, useState } from 'react';

import classes from './ImageUploader.module.css';

export function ImageUploader(): JSX.Element {
  const [images, setImages] = useState<File[]>([]);

  function handleImageUpload(evt: ChangeEvent<HTMLInputElement>) {
    if (evt.target.files) {
      const newImages = Array.from(evt.target.files);
      setImages((prevImages) => [...prevImages, ...newImages.slice(0, 4)]);
    }
  }

  const isActive = true;
  const count = 3;
  const text = isActive ? `Еще ${count}` : 'Не больше 4 штук';

  return (
    <div className={classes.previewList}>
      {images.map((image, index) => (
        <div key={index} className={classes.preview}>
          <img src={URL.createObjectURL(image)} alt={`${index}`} />
          <button className={classes.remove}>
            <span className="visually-hidden">Удалить изображение</span>
          </button>
        </div>
      ))}
      <div
        className={classNames(classes.uploader, { [classes.active]: isActive })}
      >
        <input
          type="file"
          multiple
          className={classes.input}
          onChange={handleImageUpload}
        />
        <span>{text}</span>
      </div>
    </div>
  );
}
