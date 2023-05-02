import classNames from 'classnames';
import { ChangeEvent, MouseEvent } from 'react';

import classes from './ImageUploader.module.css';

type ImageUploader = {
  images: File[];
  setImages: (files: File[]) => void;
};

type UploaderFieldProps = {
  imagesCount: number;
  onUploaded: (images: File[]) => void;
};

type PreviewListProps = {
  images: File[];
  onRemove: (index: number) => void;
};

const MAX_IMAGES_COUNT = 4;

export function ImageUploader({
  images,
  setImages,
}: ImageUploader): JSX.Element {
  const handleRemove = (index: number) => {
    const update = [...images.slice(0, index), ...images.slice(index + 1)];
    setImages(update);
  };

  const handleUpload = (newImages: File[]) => {
    const update = [...images, ...newImages];
    setImages(update);
  };

  const imagesCount = images.length;
  const uploaderField = imagesCount < MAX_IMAGES_COUNT && (
    <UploaderField imagesCount={imagesCount} onUploaded={handleUpload} />
  );

  return (
    <div className={classes.uploaderWrapper}>
      <PreviewList images={images} onRemove={handleRemove} />
      {uploaderField}
    </div>
  );
}

function PreviewList({ images, onRemove }: PreviewListProps) {
  const handleImageRemove = (evt: MouseEvent<HTMLButtonElement>) => {
    const { imageIndex } = evt.currentTarget.dataset;

    if (imageIndex) {
      const index = Number(imageIndex);
      onRemove(index);
    }
  };

  return (
    <>
      {images.map((image, index) => (
        <div key={index} className={classes.preview}>
          <img src={URL.createObjectURL(image)} alt={`${index}`} />
          <button
            type="button"
            className={classes.remove}
            data-image-index={index}
            onClick={handleImageRemove}
          >
            <span className="visually-hidden">Удалить изображение</span>
          </button>
        </div>
      ))}
    </>
  );
}

function UploaderField({
  imagesCount,
  onUploaded,
}: UploaderFieldProps): JSX.Element {
  const MAX_IMAGES_ERROR = `Не больше ${MAX_IMAGES_COUNT} штук`;
  const BAD_FORMAT_ERROR = 'Неизвестный формат изображения';

  const handleImageUpload = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      const newImages = Array.from(evt.target.files);

      const filtered = newImages.filter(
        (file) => file.type !== 'image/jpeg' && file.type !== 'image/png',
      );

      if (filtered.length) {
        console.error(BAD_FORMAT_ERROR);
        return;
      }

      if (imagesCount + newImages.length > MAX_IMAGES_COUNT) {
        console.error(MAX_IMAGES_ERROR);
        return;
      }

      onUploaded(newImages);
    }
  };

  const isEmpty = imagesCount === 0;
  const uploaderText =
    imagesCount === 0
      ? MAX_IMAGES_ERROR
      : `Еще ${MAX_IMAGES_COUNT - imagesCount}`;

  return (
    <div className={classNames(classes.uploader, { [classes.empty]: isEmpty })}>
      <input
        type="file"
        multiple
        className={classes.uploaderInput}
        onChange={handleImageUpload}
      />
      <span className={classes.uploaderText}>{uploaderText}</span>
    </div>
  );
}
