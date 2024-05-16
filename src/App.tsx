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

  // Function to disable dates
  const shouldDisableDate = (date) => {
    const today = new Date();
    const isAfterToday = date > today;
    return isAfterToday;
  };

  // Calculate the previous month and current month
  const today = new Date();
  const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);

  useEffect(() => {
    setCount((count) => count++);
    console.log("hello")
  },[])

  console.log("currentMonth =", currentMonth);
  console.log("prevMonth =", prevMonth);


  return (
    <div>
      <DateRangePicker 
        onChange={handleDateChange} 
        shouldDisableDate={shouldDisableDate} 
        defaultCalendarValue={[prevMonth, currentMonth]}
        format="MM/dd/yyyy" 
        character=" – "
      />
      <div>
        <p>Start Date: {dateRange && dateRange[0] ? dateRange[0].toString() : 'Not selected'}</p>
        <p>End Date: {dateRange && dateRange[1] ? dateRange[1].toString() : 'Not selected'}</p>
      </div>
    </div>
  );
};

export default App;
