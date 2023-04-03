import { Component } from 'react';
import st from './Modal.module.css';

class Modal extends Component {
  handlerModalClose(e) {
    // console.log(e)
    console.log('handlermod', e.currentTarget);
    if (e.key === 'Escape' || e.target.localName === 'div') {
      console.log('remove');
      window.removeEventListener('keydown', this.handlerModalClose, false);
      window.removeEventListener('click', this.handlerModalClose, false);
      // this.props.modalClose();
    }
  }

  componentDidMount() {
    console.log('modal mount');
    window.addEventListener('keydown', ev => this.handlerModalClose(ev), false);
    window.addEventListener('click', ev => this.handlerModalClose(ev), false);
  }

  render() {
    // console.log("Modal",this.props);
    const currentImg = this.props.gallery.filter(
      el => el.id === this.props.imgId
    );

    // console.log("current",currentImg)
    return (
      <>
        <div className={st.Overlay}>
          <div className={st.Modal}>
            <img src={currentImg[0].largeImageURL} alt={currentImg[0].tags} />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
