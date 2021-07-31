import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
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

const admin = {
  email: 'admin@fotan.pk',
  password: 'admin',
};

const schema = yup.object().shape({
  email: yup.string().email('Valid Email Required').required('Email required'),
  password: yup.string().required('Password Required'),
});

const LoginModal = ({ open, closeHandler }) => {
  const history = useHistory();
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
    if (data.email === admin.email && data.password === admin.password) {
      history.push('/app');
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
