import React from 'react';
import Modal from 'react-modal';
import Link from 'next/link';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(6, 6, 6, 0.78)', 
    zIndex: 1000, 
  },
  content: {
    border: 'none', 
    background: 'transparent', 
    maxWidth: '800px', 
    margin: '0 auto', 
    padding: '0px',
    top:'0',
    bottom: '0px',
    right:'0px',
    left: '0px',
    overflow: 'inherit',
    maxHeight: 'inherit',
    borderRadius: '8px'
  },
};
const CountrySelectorModel = ({ isOpen, closeModal }) => {





  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    style={customStyles} 
    ariaHideApp={false}
    >
      <div className='popup_wrap'>        
        <div className="popup_container">
          <div className="popup_box_inner">
          
            <div className="popup_left justify_content_center block_bg_orange">
              
            </div>
         
          </div>
        </div>
      </div>

    </Modal>
  );
};

export default CountrySelectorModel;
