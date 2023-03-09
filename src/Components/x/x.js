import React from 'react';
import handleSubmit from '../../handles/handlesubmit';
import { useRef } from 'react';
import { render } from '@testing-library/react';

function Xtra() {

  const dataRef = useRef()

  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }

  return (
    <div className="x">
      hits
      <h2>hi</h2>
      <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form>
    </div>
    );

}

export default Xtra;
