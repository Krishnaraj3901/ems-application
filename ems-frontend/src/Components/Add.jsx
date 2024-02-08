import React, { useState } from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Add() {

  const navigate = useNavigate()


  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState('')

    const handleAdd=async(e)=>{
      const body = {id,name,age,designation,salary}
         await axios.post('http://localhost:8000/addEmployee',body).then((response)=>{
            alert(response.data.message)
            navigate('/')
            console.log(id,name,age,designation,salary);
          })
          .catch((error)=>{
            alert('employee id already exists')
          })
    }



  return (
    <div>
      <div className="container">
        <h1 className='text-light m-3'>Add Employee</h1>
         <div className="form m-5">
          <div className='w-50' style={{marginLeft:'300px'}}>
                 <MDBInput onChange={(e)=>setId(e.target.value)} label='Id' id='formControlLg' type='text' size='lg' />
                <br />
                <MDBInput onChange={(e)=>setName(e.target.value)} label='Name' id='formControlDefault' type='text' size='lg' />
                <br />
                <MDBInput onChange={(e)=>setAge(e.target.value)} label='Age' id='formControlSm' type='text' size='lg' />
                <br />
                <MDBInput onChange={(e)=>setDesignation(e.target.value)} label='Designation' id='formControlLg' type='text' size='lg' />
                <br />
                <MDBInput onChange={(e)=>setSalary(e.target.value)} label='Salary' id='formControlDefault' type='text' size='lg' />
                 <br />
                 <div  className='d-flex justify-content-center align-items-between g-3 m-3'>

                  <Link to={'/'}>
                  <MDBBtn style={{marginRight:'300px'}}>Back Home</MDBBtn>

                  </Link>

                  <MDBBtn onClick={(e)=>handleAdd(e)}>Add Employee</MDBBtn>
                 </div>
          </div>
      
         </div>
      </div>
    </div>
  )
}

export default Add