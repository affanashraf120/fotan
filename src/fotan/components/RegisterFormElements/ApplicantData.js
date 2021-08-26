import {
  Checkbox,
  FormGroup as MaterialFormGroup,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa';
import InputMask from 'react-input-mask';
import { Button, FormGroup, Input, InputGroup, Label } from 'reactstrap';
import styled from 'styled-components';
import TimeRangePicker from '../TimeRangePicker';

const BlockSpace = styled.div`
  width: 100%;
  margin-top: 50px;
`;
const NextButton = styled(Button)`
  margin: 1rem;
  width: 100px;
  align-self: flex-end;
`;
const Title2 = styled.h3`
  text-align: center;
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

const ApplicantData = () => {
  const {
    register,
    control,
    trigger,
    formState: { errors },
  } = useFormContext();
  const [customRange, setCustomRange] = useState(true);
  const handleNext = () => {
    trigger().then((valid) => {
      console.log(valid);
      console.log(errors);
    });
  };
  return (
    <>
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
            onChange={() => {
              // eslint-disable-next-line no-unused-expressions
              customRange ? setCustomRange(false) : setCustomRange(true);
            }}
          />
        </MaterialFormGroup>
        <TimeRangePicker disabled={customRange} control={control} />
      </FormControl>

      <BlockSpace />

      <FormControl component="fieldset">
        <Title2>You can contract for how many months ?</Title2>
        <FormControl>
          <Input type="select" {...register('months')}>
            <option>One year</option>
            <option>Three months</option>
            <option>Six months</option>
          </Input>
        </FormControl>
        <Typography style={{ color: 'red' }}>
          {errors.months?.message}
        </Typography>
      </FormControl>

      <BlockSpace />

      <Title2>Applicant’s Bio data</Title2>
      <FormGroup className="form-group">
        <Label>Applicant’s Name</Label>
        <Input
          className="form-control"
          type="text"
          {...register('applicant_name')}
        />
        <Typography style={{ color: 'red' }}>
          {errors.applicant_name?.message}
        </Typography>
      </FormGroup>

      <FormGroup className="form-group">
        <Label>Father’s Name</Label>
        <Input
          className="form-control"
          type="text"
          {...register('father_name')}
        />
        <Typography style={{ color: 'red' }}>
          {errors.father_name?.message}
        </Typography>
      </FormGroup>

      <FormGroup className="form-group">
        <Label>Age Approximately</Label>
        <Input className="form-control" type="number" {...register('age')} />
        <Typography style={{ color: 'red' }}>{errors.age?.message}</Typography>
      </FormGroup>

      <FormGroup className="form-group ">
        <Label>CNIC</Label>
        <InputMask mask="99999-9999999-9" {...register('cnic')}>
          {(inputProps) => <Input {...inputProps} />}
        </InputMask>
        <Typography style={{ color: 'red' }}>{errors.cnic?.message}</Typography>
      </FormGroup>

      <FormGroup className="form-group">
        <Label>Email</Label>
        <Input className="form-control" type="email" {...register('email')} />
        <Typography style={{ color: 'red' }}>
          {errors.email?.message}
        </Typography>
      </FormGroup>

      <FormGroup>
        <Label>Contact Numbers</Label>
        <InputGroup>
          <InputMask mask="9999-9999999" {...register('phone_1')}>
            {(inputProps) => (
              <Input {...inputProps} placeholder="1st contact no." />
            )}
          </InputMask>
          <InputMask mask="9999-9999999" {...register('phone_2')}>
            {(inputProps) => (
              <Input {...inputProps} placeholder="2nd contact no." />
            )}
          </InputMask>
        </InputGroup>
        <Typography style={{ color: 'red' }}>
          {errors.phone_1?.message}
        </Typography>
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
        <Typography style={{ color: 'red' }}>
          {errors.maritalStatus?.message}
        </Typography>
      </FormGroup>

      <FormGroup>
        <Label>Cast</Label>
        <Input type="text" {...register('cast')} />
        <Typography style={{ color: 'red' }}>{errors.cast?.message}</Typography>
      </FormGroup>

      <FormGroup className="form-group">
        <Label>Address</Label>
        <Input className="form-control" type="text" {...register('address')} />
        <Typography style={{ color: 'red' }}>
          {errors.address?.message}
        </Typography>
      </FormGroup>

      <NextButton onClick={handleNext}>
        Step 1/2
        <FaArrowRight style={{ marginLeft: '5px', fontWeight: 'bolder' }} />
      </NextButton>
    </>
  );
};

export default ApplicantData;
