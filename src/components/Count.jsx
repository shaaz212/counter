import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset,incrementbyAmount } from '../redux/counterSlice';


function Count() {

  const dispatch = useDispatch()
  const count = useSelector(state=>state.counterSlice.count)
  return (
    <>
        <div className='container  border border-light shadow  d-flex flex-column align-items-center justify-content-center mt-5 rounded'>
            <h1 className='mt-5 text-warning fw-bold display-2'>Counter App</h1>
            <h2 className='mt-3 fw-semibold'>Count : {count}</h2>
            <div className='d-flex mt-3'>
              <Button onClick={()=>dispatch(increment())} className='btn  btn-lg me-5' variant="outline-success">Add</Button>
              <Button onClick={()=>dispatch(decrement())} className='btn  btn-lg'  variant="outline-danger">Less</Button>
            </div>
            <Button onClick={()=>dispatch(reset())} className='btn  btn-lg mt-3' variant="outline-info">Reset</Button>
            <div className='d-flex mt-3 mb-5'>
              <Button onClick={()=>dispatch(incrementbyAmount(5))} className='btn  btn-lg ms-0' style={{width:"10rem"}}variant="outline-warning">Add By 5</Button>
            </div>
        </div>
    </>
  )
}

export default Count