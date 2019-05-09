import React, { Component } from 'react';
import { TweenMax } from 'gsap';
import './Modal.scss';


type ModalProps = {
  title: string,
  description: string,
  tecnology: string,
  gallery: string[],
  visible: boolean,
  company?: string,
  url?: string,
  closeModal?,
}

class Modal extends Component<ModalProps, any> {

  render() {
    return (
      <div className='modal' ref='container'>
    
          <button className='modal__close' onClick={this.onCloseModal.bind(this)}>Close</button>
          <h1 className='modal__title'>{this.props.title}</h1>
          <div className="modal__gallery">
            {this.props.gallery.map((img, i) => 
              <figure className='modal__figure' key={i}>
                <img src={`/images/${img}`}/>
              </figure>
            )}
          </div>
          <p className='modal__description'>{this.props.description}</p>
          <p className='modal__tecnology'>Tecnology: {this.props.tecnology}</p>
          <p className='modal__company'>Company: {this.props.company}</p>
          <p className='modal__url'>Site: {this.props.url}</p>

      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      TweenMax.to(this.refs.container, .5, { y: '0' });
    } else {
      TweenMax.to(this.refs.container, .5, { y: '100vh' });
    }
  }

  onCloseModal() {
    TweenMax.to(this.refs.container, .5, { y: '100vh' });

    if (this.props.closeModal) { 
      this.props.closeModal();
    }
  }
}

export default Modal;
