import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import * as yup from 'yup';
import IntlMessages from '../../helpers/IntlMessages';
import { emails, passwords } from '../data/branchHandles';

const schema = yup.object().shape({
  email: yup.string().email('Valid Email Required').required('Email required'),
  password: yup.string().required('Password Required'),
});

const LoginModal = ({ open, closeHandler }) => {
  // const [messageError, setMessageError] = useState('');
  const history = useHistory();
  const messageRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);

  const submitHandler = (data) => {
    setLoading(true);
    // const handle = {};

    // Find email
    // Object.entries(emails).forEach(([key, value]) => {
    //   if (data.email.toLocaleLowerCase() === value) {
    //     handle.name = key;
    //     handle.email = value;
    //   }
    // });
    //
    if (data.email === emails.chairman && data.password === passwords.fotan) {
      history.push('/app');
    } else {
      messageRef.current.innerText = 'Invalid email or password';
      setLoading(false);
    }
  };

  return (
    <>
      <Modal isOpen={open} onClosed={closeHandler}>
        <ModalHeader>Login As Admin</ModalHeader>
        <ModalBody>
          <Form
            className="av-tooltip tooltip-label-bottom"
            onSubmit={handleSubmit(submitHandler)}
          >
            <FormGroup className="form-group">
              <Label>
                <IntlMessages id="user.email" />
              </Label>
              <Input className="form-control" {...register('email')} />
              {errors?.email && (
                <div className="invalid-feedback d-block">
                  {errors?.email?.message}
                </div>
              )}
            </FormGroup>

            <FormGroup className="form-group">
              <Label>
                <IntlMessages id="user.password" />
              </Label>
              <Input
                className="form-control"
                type="password"
                {...register('password')}
              />
              {errors?.password && (
                <div className="invalid-feedback d-block">
                  {errors?.password?.message}
                </div>
              )}
            </FormGroup>

            <div className="d-flex justify-content-between align-items-center">
              <Button
                color="primary"
                className={`btn-shadow btn-multiple-state ${
                  loading ? 'show-spinner' : ''
                }`}
                size="lg"
              >
                <span className="spinner d-inline-block">
                  <span className="bounce1" />
                  <span className="bounce2" />
                  <span className="bounce3" />
                </span>
                <span className="label">
                  <IntlMessages id="user.login-button" />
                </span>
              </Button>
            </div>
          </Form>
          <Typography
            style={{ marginTop: '15px' }}
            innerRef={messageRef}
            color="error"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default LoginModal;
