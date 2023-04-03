import { Component } from 'react';
// import Loader from 'components/Loader/Loader';
// import FormApi from 'components/FormApi/FormApi';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
    // state={
    //     gallery:[],
    // }
    // requestGallery(){
    // FormApi(this.props.sea, 1, 12).then(data=>this.setState({gallery:data.data.hits}))
    // }

    // componentDidMount(){
    //     this.requestGallery()

    // }
    
    
  render() {
    // rest.then(data=>{console.log(data)})
    // console.log(this.props.gallery)
    ;
    return (
      <>
        {(this.props.gallery.length===0)? <div>There are nothing search result</div>:
        <ul className={s.ImageGallery} >
        {this.props.gallery.map(el=>{return(
            <>
            <ImageGalleryItem key={el.id} webformatURL={el.webformatURL} largeImageURL={el.largeImageURL} tag={el.tags} elId={el.id} activeImg={this.props.activeImg}/>
            
            </>
        )})} 
        </ul>}
      </>
    );
  }
}

export default ImageGallery;
