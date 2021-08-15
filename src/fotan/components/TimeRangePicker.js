import { TimePicker } from 'antd';
import React from 'react';
import { useController } from 'react-hook-form';

export default function ResponsiveTimePickers({ control }) {
  const {
    field: { ...inputProps },
  } = useController({
    name: 'time',
    control,
  });
  return (
    <div>
      <TimePicker.RangePicker
        size="large"
        order
        format="HH:mm"
        minuteStep={5}
        {...inputProps}
      />
    </div>
  );
}
