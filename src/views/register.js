import { Radio, RadioGroup } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  Button,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from 'reactstrap';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { Colxx } from '../components/common/CustomBootstrap';
import TimeRangePicker from '../fotan/components/TimeRangePicker';

const title = `#464646`;

const Container = styled.div.attrs(() => ({
  className: 'home-row',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title1 = styled.h2`
  text-align: center;
  color: ${title};
  margin: 1rem;
  font-weight: bolder;
  font-size: xx-large;
`;

const Title2 = styled.h3`
  text-align: center;
`;

const CNICInput = styled(InputMask)`
  padding: 0.5rem;
  margin: 0.5rem;
  outline: none;
`;

const timeShifts = [
  {
    detail: 'Full Day Time  07:00am – 04:00pm',
    time: '07:00am–04:00pm',
    id: 'full-day-time',
  },
  {
    detail: 'Morning time / Just School Time ( Aprox 07:00am – 02:00pm )',
    time: '07:00am-02:00pm',
    id: 'school-time',
  },
  {
    detail: 'Evening Time / Just Academy Time ( 04:00pm – 07:00pm )',
    time: '04:00pm–07:00pm',
    id: 'academy-time',
  },
  {
    detail: 'College Morning shift  07:00 – 12:00',
    time: '07:00am–12:00pm',
    id: 'collage-morning-time',
  },
  {
    detail: 'College Evening shift	11:50 – 04:20',
    time: '11:50am-04:20pm',
    id: 'collage-evening-time',
  },
  {
    detail: 'Short time coaching (01:00 pm – 04:00 pm)',
    time: '01:00pm-04:00pm',
    id: 'short-time',
  },
  {
    detail: 'I am available all above times “I am eligible for”',
    time: '07:00am-07:00pm',
    id: 'all-time',
  },
];

const Page = () => {
  const methods = useForm();
  const [customTime, setCustomTime] = useState(false);
  const { register, handleSubmit, control } = methods;

  const asyncRegister = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Title1>Register</Title1>
      <Colxx xxs="12" md="10">
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(asyncRegister)}>
            <FormControl
              //   error={error}
              component="fieldset"
            >
              <Title2>
                I am going to Apply for teaching/available time (Pick one)
              </Title2>
              <RadioGroup
                {...register('time', {
                  required: true,
                })}
                onChange={(e) => {
                  if (e.target.value === 'custom') setCustomTime(true);
                  else setCustomTime(false);
                }}
              >
                {timeShifts.map((item) => (
                  <FormControlLabel
                    key={item.id}
                    value={item.time}
                    control={<Radio />}
                    label={item.detail}
                  />
                ))}
                <FormControlLabel
                  value="custom"
                  control={<Radio />}
                  label="Customized time"
                />
              </RadioGroup>
              <TimeRangePicker disabled={!customTime} control={control} />
              <FormHelperText>{/* Error Message */}</FormHelperText>
            </FormControl>

            <FormControl component="fieldset">
              <Title2>You can contract for how many months ?</Title2>
              <FormControl>
                <Input
                  type="select"
                  {...register('months', { required: true })}
                >
                  <option>Six</option>
                  <option>Three</option>
                  <option>Twelve</option>
                </Input>
              </FormControl>
            </FormControl>

            <div className="section mb-0">
              <Title2>Applicant’s Bio data</Title2>
              <FormGroup className="form-group">
                <Label>Applicant’s Name</Label>
                <Input
                  className="form-control"
                  name="Applicant’s Name"
                  type="text"
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label>Father’s Name</Label>
                <Input
                  className="form-control"
                  name="Father’s Name"
                  type="text"
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Label>Age Approximately</Label>
                <Input
                  className="form-control"
                  name="Age Approximately"
                  type="number"
                />
              </FormGroup>

              <FormGroup className="form-group ">
                <Label>CNIC</Label>
                <CNICInput mask="99999-9999999-9" />
              </FormGroup>

              <FormGroup className="form-group">
                <Label>Email</Label>
                <Input className="form-control" name="Email" type="email" />
              </FormGroup>

              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <span className="input-group-text">Contact Numbers</span>
                  </InputGroupAddon>
                  <Input />
                  <Input />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <Label>Marital Status</Label>
                <Input type="select">
                  <option value="Single">Single</option>
                  <option value="married">Married</option>
                </Input>
              </FormGroup>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Cost</InputGroupText>
                  <InputGroupText>₨</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>

              <FormGroup className="form-group">
                <Label>Address</Label>
                <Input className="form-control" name="Address" type="text" />
              </FormGroup>
            </div>

            <Button style={{ margin: '1rem' }} type="submit">
              Next
            </Button>
          </Form>
        </FormProvider>
      </Colxx>
    </Container>
  );
};

export default Page;
