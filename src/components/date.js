import React, { useState, useEffect } from 'react';

export default function DateDisplay({ dateString }) {

  useEffect(() => {
    const parsed = new Date(dateString);
    if(parsed) {
      setDate(parsed);
    }
  }, [dateString]);

  const [date, setDate] = useState(null);

  return (
    <div>
      {
        date && <p style={{ color: '#CCC', margin: 0 }}>{date.toDateString()}</p>
      }
    </div>
  )
}