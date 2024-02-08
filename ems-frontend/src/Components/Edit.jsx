import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Edit() {

  const navigate = useNavigate()

  const [anEmployee,setAnEmployee] = useState()

  //create a state for all items in an employee object

  const [empId,setEmpId] = useState('')
  const [empName,setEmpName] = useState('')
  const [empAge,setEmpAge] = useState('')
  const [empDesignation,setEmpDesignation] = useState('')
  const [empSalary,setEmpSalary] = useState('')


  const {id} = useParams()
  console.log(id);//particular employee id

  //api call to fetch particular employee details
  const fetchEmployee = async()=>{
    const response = await axios.get('http://localhost:8000/getAnEmployee/'+id)
    console.log(response.data.employee);
    setAnEmployee(response.data.employee)
    setEmpId(response.data.employee.id)
    setEmpName(response.data.employee.name)
    setEmpAge(response.data.employee.age)
    setEmpDesignation(response.data.employee.designation)
    setEmpSalary(response.data.employee.salary)

  }

  console.log(anEmployee);

  useEffect(()=>{
    fetchEmployee()
  },[])


  const handleUpdate=async()=>{
    const body={id:empId,name:empName,age:empAge,designation:empDesignation,salary:empSalary}
    //api call to update details
    const result = await axios.post('http://localhost:8000/updateAnEmployee/'+id,body)
    console.log(result);
    alert(result.data.message)
    navigate('/')

  }



  return (
    <>
      <div className="container">
        <h1 className='text-light m-3'>edit Employee Details</h1>
         <div className="form m-5">
          <div className='w-50' style={{marginLeft:'300px'}}>
                 <MDBInput value={empId} onChange={(e)=>setEmpId(e.target.value)} label='Id' id='formControlLg' type='text' size='lg' />
                <br />
                <MDBInput value={empName} onChange={(e)=>setEmpName(e.target.value)} label='Name' id='formControlDefault' type='text' size='lg' />
                <br />
                <MDBInput value={empAge} onChange={(e)=>setEmpAge(e.target.value)} label='Age' id='formControlSm' type='text' size='lg' />
                <br />
                <MDBInput value={empDesignation} onChange={(e)=>setEmpDesignation(e.target.value)} label='Designation' id='formControlLg' type='text' size='lg' />
                <br />
                <MDBInput value={empSalary} onChange={(e)=>setEmpSalary(e.target.value)} label='Salary' id='formControlDefault' type='text' size='lg' />
                 <br />
                 <div  className='d-flex justify-content-center align-items-between g-3 m-3'>

                  <Link to={'/'}>
                  <MDBBtn style={{marginRight:'300px'}}>Back Home</MDBBtn>

                  </Link>

                  
                  <MDBBtn onClick={(e)=>handleUpdate(e)}>Update Employee Details</MDBBtn>
                  
                  
                 </div>
          </div>
      
         </div>
      </div>
    </>
  )
}

export default Edit