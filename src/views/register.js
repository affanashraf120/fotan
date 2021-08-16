import {
  Checkbox,
  FormGroup as MaterialFormGroup,
  Radio,
  RadioGroup,
  Stepper,
  StepLabel,
  Step,
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa';
import InputMask from 'react-input-mask';
import {
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  Label,
} from 'reactstrap';
import styled from 'styled-components';
import TimeRangePicker from '../fotan/components/TimeRangePicker';

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

const BlockSpace = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Form = styled.form`
  margin: auto;
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

const NextButton = styled(Button)`
  margin: 1rem;
  width: 100px;
  align-self: flex-end;
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
  // const [customTime, setCustomTime] = useState(false);
  const { register, handleSubmit, control } = methods;

  const asyncRegister = (data) => {
    console.log(data);
  };
  return (
    <CustomContainer>
      <Title1>Register</Title1>
      <Container>
        <Col xs="12" md="8" style={{ margin: 'auto' }}>
          <Stepper alternativeLabel activeStep={1}>
            {['Step 1/5', 'Step 2/5', 'Step 3/5', 'Step 4/5', 'Step 5/5'].map(
              (label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              )
            )}
          </Stepper>
          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(asyncRegister)}>
              <FormControl>
                <Title2>
                  I am going to Apply for teaching/available time (Tick any one)
                </Title2>
                <MaterialFormGroup>
                  {timeShifts.map((item) => (
                    <FormControlLabel
                      key={item.id}
                      control={<Checkbox />}
                      label={item.detail}
                    />
                  ))}
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Customized Time"
                    onChange={(e) => console.log(e.target)}
                  />
                </MaterialFormGroup>
                <TimeRangePicker control={control} />
                <FormHelperText>{/* Error Message */}</FormHelperText>
              </FormControl>

              <BlockSpace />

              <FormControl component="fieldset">
                <Title2>You can contract for how many months ?</Title2>
                <FormControl>
                  <Input
                    type="select"
                    {...register('months', { required: true })}
                  >
                    <option>One year</option>
                    <option>Three months</option>
                    <option>Six months</option>
                  </Input>
                </FormControl>
              </FormControl>

              <BlockSpace />

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
                <InputMask mask="99999-9999999-9">
                  {(inputProps) => <Input {...inputProps} />}
                </InputMask>
              </FormGroup>

              <FormGroup className="form-group">
                <Label>Email</Label>
                <Input className="form-control" name="Email" type="email" />
              </FormGroup>

              <FormGroup>
                <Label>Contact Numbers</Label>
                <InputGroup>
                  <InputMask mask="9999-9999999">
                    {(inputProps) => (
                      <Input {...inputProps} placeholder="1st contact no." />
                    )}
                  </InputMask>
                  <InputMask mask="9999-9999999">
                    {(inputProps) => (
                      <Input {...inputProps} placeholder="2nd contact no." />
                    )}
                  </InputMask>
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <Label>Marital Status</Label>
                <FormControl style={{ display: 'block' }}>
                  <RadioGroup {...register('maritalStatus')}>
                    <FormControlLabel
                      value="single"
                      control={<Radio />}
                      label="Single"
                    />
                    <FormControlLabel
                      value="married"
                      control={<Radio />}
                      label="Married"
                    />
                  </RadioGroup>
                </FormControl>
              </FormGroup>

              <FormGroup>
                <Label>Cast</Label>
                <Input type="text" />
              </FormGroup>

              <FormGroup className="form-group">
                <Label>Address</Label>
                <Input className="form-control" name="Address" type="text" />
              </FormGroup>

              <NextButton type="submit">
                Next
                <FaArrowRight
                  style={{ marginLeft: '5px', fontWeight: 'bolder' }}
                />
              </NextButton>
            </Form>
          </FormProvider>
        </Col>
      </Container>
    </CustomContainer>
  );
};

export default Page;
