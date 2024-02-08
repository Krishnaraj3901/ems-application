import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img className='m-2' style={{border:'2px solid white'}}
              src='https://img.freepik.com/free-vector/boss-standing-front-employee-who-working-worker-sharing-idea-with-chief-flat-vector-illustration-workplace-business-communication-concept-banner-website-design-landing-web-page_74855-21660.jpg?w=2000'
              height='30'
              alt=''
              loading='lazy'
            />
            Employee Management System
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header