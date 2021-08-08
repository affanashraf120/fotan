import React, { useEffect, useRef } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import styled from 'styled-components';

const AnnoucementPopup = ({ handleClose }) => {
  const modalRef = useRef();

  const closeModal = () => {
    modalRef.current.style.display = 'none';
    handleClose();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Modal ref={modalRef}>
      <ModalContent>
        <Header>
          <Title style={{ color: 'white' }}>IMPORTANT ANNOUNCEMENTS</Title>
          <Close onClick={closeModal}>
            <FaWindowClose />
          </Close>
        </Header>

        <Notices>
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </li>
            <BlinkText>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{' '}
              </li>
            </BlinkText>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </li>
            <BlinkText>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{' '}
              </li>
            </BlinkText>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </li>
            <BlinkText>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{' '}
              </li>
            </BlinkText>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </li>
            <BlinkText>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{' '}
              </li>
            </BlinkText>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </li>
            <BlinkText>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{' '}
              </li>
            </BlinkText>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </li>
            <BlinkText>
              <li>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{' '}
              </li>
            </BlinkText>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </li>
          </ul>
        </Notices>
      </ModalContent>
    </Modal>
  );
};

export default AnnoucementPopup;

const Notices = styled.div`
  color: white;
  overflow-y: auto;

  > ul {
    font-size: 20px;
    font-weight: bold;
  }
`;

const BlinkText = styled.span`
  color: black;
  font-size: 20px;
  font-weight: bolder;
  -webkit-animation-name: blink;
  -webkit-animation-duration: 0.5s;
  animation-name: blink;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;

  /* Add Animation */
  @-webkit-keyframes blink {
    from {
      color: black;
    }
    to {
      color: yellow;
    }
  }

  @keyframes blink {
    from {
      color: black;
    }
    to {
      color: yellow;
    }
  }
`;

const Title = styled.h3`
  font-weight: bold;
  text-decoration: underline;
`;

const Modal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #01569d;
  margin: auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  border: 10px solid white;
  //Layout
  width: 80%;
  height: 50%;
  min-width: 250px;
  max-width: 800px;
  max-height: 800px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  //Animation
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  animation-timing-function: ease-in;

  @media screen and (max-width: 600px) {
    width: 90%;
    height: 95%;
  }

  /* Add Animation */
  @-webkit-keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 8px;
`;

const Header = styled.div`
  padding: 2px 16px;
  background-color: #01569d;
  /* align-self: flex-end; */
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
`;
