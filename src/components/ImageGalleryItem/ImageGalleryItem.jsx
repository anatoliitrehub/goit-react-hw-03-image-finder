import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';


const ImageGalleryItem = ({ webformatURL, tag, elId, activeImg }) => {
  return (
    <>
      <li className={s.ImageGalleryItem} onClick={() => activeImg(elId)}>
        <img className={s.ImageGalleryItemImage} src={webformatURL} alt={tag} />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes={
  webformatURL:PropTypes.string.isRequired,
  tag:PropTypes.string,
  elId:PropTypes.number.isRequired,
  activeImg:PropTypes.func.isRequired
}

export default ImageGalleryItem;

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
