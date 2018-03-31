import React from 'react';

const ControlButtonsComponent = (props) => {
  return (
    <div className='ControlButtons'>
      <button>
        <span role='img' aria-label='squared ok'>🆗</span>
      </button>
      <button
        onClick={() => props.clearText()}
      >
        <span role='img' aria-label='fire'>🔥</span>
      </button>
    </div>
  )
}

export default ControlButtonsComponent;
