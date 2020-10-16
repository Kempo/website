import React from 'react';

export default function DateDisplay({ dateString }) {

  return (
    <p style={{ color: '#CCC', margin: 0 }}>{new Date(dateString).toDateString()}</p>
  )
}