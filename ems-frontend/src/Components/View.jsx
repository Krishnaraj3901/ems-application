import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';



function View() {


  const {id} = useParams()
  console.log(id)

  const [anEmployee,setAnEmployee] = useState([])


  const viewEmployee = async()=>{
    const response = await axios.get('http://localhost:8000/getAnEmployee/'+id)
    console.log(response.data.employee);
    setAnEmployee(response.data.employee)

  }   
  console.log(anEmployee);

  useEffect(()=>{
    viewEmployee()
  },[])

  return (
  <>
    <div style={{textAlign:'center'}} className="container">
           <div className='mt-5 m-5 py-2 p-2'>
           <MDBCard>
      <MDBCardBody>
        <MDBCardTitle className='p-2 text-warning'><h2>Employee Details</h2></MDBCardTitle>
        <MDBCardText>
        <MDBListGroup style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem><span className='m-2 text-success'>Employee Id:</span> {anEmployee.id}</MDBListGroupItem>
      <MDBListGroupItem><span className='m-2 text-success'>Employee Name:</span>{anEmployee.name}</MDBListGroupItem>
      <MDBListGroupItem><span className='m-2 text-success'>Employee Age:</span>{anEmployee.age}</MDBListGroupItem>
      <MDBListGroupItem><span className='m-2 text-success'>Employee Designation:</span>{anEmployee.designation}</MDBListGroupItem>
      <MDBListGroupItem><span className='m-2 text-success'>Employee Salary:</span>{anEmployee.salary}</MDBListGroupItem>
    </MDBListGroup>

        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>

    <Link to={'/'}>
                  <MDBBtn style={{marginRight:'60px',marginTop:'20px'}}>Back Home</MDBBtn>

                  </Link>

           </div>
      



      </div>
      </>
  )
}

export default View