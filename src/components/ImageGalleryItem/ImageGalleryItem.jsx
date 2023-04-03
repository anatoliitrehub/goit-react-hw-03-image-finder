import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({webformatURL,tag,elId,activeImg}) =>{
    return(
        <>
<li className={s.ImageGalleryItem} onClick={()=>activeImg(elId)} >
  <img className={s.ImageGalleryItemImage} src={webformatURL} alt={tag} />
</li>
        </>
    )
}

export default ImageGalleryItem;

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна