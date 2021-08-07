import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AnnoucementPopup = () => (
  <Popup defaultOpen modal nested>
    {(close) => (
      <div className="custom-modal">
        <button type="button" className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Annoucments </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
          nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
          quibusdam voluptates delectus doloremque, explicabo tempore dicta
          adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem
          alias. Vitae?
        </div>
      </div>
    )}
  </Popup>
);

export default AnnoucementPopup;
