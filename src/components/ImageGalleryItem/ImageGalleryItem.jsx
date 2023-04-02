

const ImageGalleryItem = ({webformatURL,largeImageURL,tag}) =>{
    return(
        <>
<li className="gallery-item">
  <img src={webformatURL} alt={tag} />
</li>
        </>
    )
}

export default ImageGalleryItem;

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна