import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
// import { Button } from 'reactstrap';
// import { FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  months: yup.string().required('Months is required'),
  applicant_name: yup.string().required('Applicant name is required'),
  father_name: yup.string().required('Father name is required'),
  age: yup.number().required('Age is required'),
  cnic: yup.string().required('CNIC is required'),
  email: yup
    .string()
    .email('Email format must be valid')
    .required('Email is required'),
  phone_1: yup.string().required('First phone number is required'),
  phone_2: yup.string(),
  maritalStatus: yup.string().required('Marital status is required'),
  cast: yup.string().required('Cast is required'),
  address: yup.string().required('Address is required'),
});

const Form = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

// const NextButton = styled(Button)`
//   margin: 1rem;
//   width: 100px;
//   align-self: flex-end;
// `;

const RegisterForm = (props) => {
  const { children } = props;
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = methods;
  const asyncRegister = (data) => {
    console.log(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(asyncRegister)}>
          {children}
          {/* <NextButton type="submit">
            Step 1/2
            <FaArrowRight style={{ marginLeft: '5px', fontWeight: 'bolder' }} />
          </NextButton> */}
        </Form>
      </FormProvider>
    </>
  );
};

export default RegisterForm;
