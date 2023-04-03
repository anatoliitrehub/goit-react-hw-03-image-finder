import { Component } from 'react';
// import Loader from 'components/Loader/Loader';
// import FormApi from 'components/FormApi/FormApi';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <>
        {this.props.gallery.length === 0 ? (
          <div>There are nothing search result</div>
        ) : (
          <ul className={s.ImageGallery}>
            {this.props.gallery.map(el => {
              return (
                <>
                  <ImageGalleryItem
                    key={el.id}
                    webformatURL={el.webformatURL}
                    largeImageURL={el.largeImageURL}
                    tag={el.tags}
                    elId={el.id}
                    activeImg={this.props.activeImg}
                  />
                </>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

ImageGallery.propTypes={
  gallery:PropTypes.array.isRequired
}

export default ImageGallery;
