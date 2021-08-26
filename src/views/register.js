import React from 'react';
import { Col, Container } from 'reactstrap';
import styled from 'styled-components';
import ApplicantData from '../fotan/components/RegisterFormElements/ApplicantData';
import RegisterForm from '../fotan/components/RegisterFormElements/RegisterForm';

const title = `#464646`;

const CustomContainer = styled.div.attrs(() => ({
  className: 'home-row',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 0.5rem;
`;

const Title1 = styled.h2`
  text-align: center;
  color: ${title};
  margin: 1rem;
  font-weight: bolder;
  font-size: xx-large;
`;

const Page = () => {
  // const [customTime, setCustomTime] = useState(false);

  return (
    <CustomContainer>
      <Title1>Register</Title1>
      <Container>
        <Col xs="12" md="8" style={{ margin: 'auto' }}>
          <RegisterForm>
            <ApplicantData />
          </RegisterForm>
        </Col>
      </Container>
    </CustomContainer>
  );
};

export default Page;
