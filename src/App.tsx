import React, { useEffect, useState } from 'react';
import { DateRangePicker } from 'rsuite';
import './styles.css';

const App = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [count, setCount] = useState(0);

  const handleDateChange = (value) => {
    setDateRange(value);
    console.log('Selected Date Range:', value);
  };

  // const handleDateChange = (newDateRange: Date[] | null) => {
  //   let beginDate = null;
  //   let endDate = null;
  //   if (newDateRange && newDateRange[0]) {
  //     beginDate = new Date(newDateRange[0].setHours(0, 0, 0, 0));
  //     endDate = new Date(newDateRange[1].setHours(23, 59, 59, 999));
  //   }
  //   console.log('beginDate =', beginDate, ", endDate =",endDate)
  //   setDateRange(() => (beginDate ? [beginDate, endDate] : [null, null]));
  // };

  const currentMonth = new Date('2024-01-05T17:41:53');
  const prevMonth = new Date('2023-07-14T17:10:25');

  // Function to disable dates
  // const shouldDisableDate = (date: Date) => {
  //  if (date < prevMonth || date > currentMonth){
  //   return true;
  //  }
    
  // };

    const shouldDisableDate = (date: Date) => date < prevMonth || date > currentMonth;

  // Calculate the previous month and current month


  useEffect(() => {
    setCount((count) => count++);
    console.log("hello")
  },[])

  console.log("currentMonth =", currentMonth);
  console.log("prevMonth =", prevMonth);


  return (
    <div>
      <DateRangePicker 
        placeholder="Select Date Range"
        onChange={handleDateChange} 
        shouldDisableDate={shouldDisableDate} 
        style={{ width: 255, fontFamily: 'Helvetica, Arial, sans-serif' }}
        defaultCalendarValue={[prevMonth, currentMonth]}
        ranges={[]}
        format="MMM dd, yyyy"
        character=" - "
        showHeader={false}
      />
      <div>
        <p>Start Date: {dateRange && dateRange[0] ? dateRange[0].toString() : 'Not selected'}</p>
        <p>End Date: {dateRange && dateRange[1] ? dateRange[1].toString() : 'Not selected'}</p>
      </div>
    </div>
  );
};

export default App;
