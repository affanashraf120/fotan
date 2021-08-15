import { Radio, RadioGroup } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from 'reactstrap';
import styled from 'styled-components';
import { Colxx } from '../components/common/CustomBootstrap';
import TimeRangePicker from '../fotan/components/TimeRangePicker';

const title = `#464646`;

const Container = styled.div.attrs(() => ({
  className: 'home-row',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
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
          <form onSubmit={handleSubmit(asyncRegister)}>
            <FormControl
              required
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
              {customTime && <TimeRangePicker control={control} />}
              <FormHelperText>{/* Error Message */}</FormHelperText>
            </FormControl>

            <Input type="submit" value="Next" />
          </form>
        </FormProvider>
      </Colxx>
    </Container>
  );
};

export default Page;
