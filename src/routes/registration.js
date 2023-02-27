import React from 'react';
import axios from 'axios';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    // MDBSelect,
    MDBRadio
  }
  from 'mdb-react-ui-kit';


const Register = () =>{
    const [firstname, setFirstName] = React.useState("")
    const [lastname, setLastName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phonenumber, setPhoneNumber] = React.useState("")
    const [gender, setGender] = React.useState("")
    const [isSelectedMale, setIsSelectedMale] = React.useState()
    const [isSelectedFemale, setIsSelectedFemale] = React.useState()
    const [isSelectedOther, setIsSelectedOther] = React.useState()


    function handleMaleGenderClick() {
        setGender("male")
        setIsSelectedFemale(false)
        setIsSelectedMale(true)
    }

    function handleFemaleGenderClick() {
        setGender("female")
        setIsSelectedMale(false)
        setIsSelectedFemale(true)
    }

    function handleOtherGenderClick() {
        setGender("other")
        setIsSelectedFemale(false)
        setIsSelectedMale(false)
        setIsSelectedOther(true)
    }


    function handleRegister() {

        axios.post(`http://localhost:3000/register`, { "firstname":firstname,"lastname":lastname,"password":password,"email":email,"gender":gender,"phonenumber":phonenumber })
        .then(res => {
          console.log(res);
          console.log(res.data);
          window.location.reload()
        })
    

        console.log(firstname,lastname,password,email,gender,phonenumber)


    }


    return (
        <MDBContainer fluid>

      <MDBRow className='justify-content-center align-items-center m-5'>

        {console.log("firstname", firstname,"lastname",lastname,"password",password,"email",email,"gender",gender,"phonenumber",phonenumber)}

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'onChange={(e)=>setFirstName(e.target.value)}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'onChange={(e)=>setLastName(e.target.value)}/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='text'onChange={(e)=>setPassword(e.target.value)}/>
              </MDBCol>

              <MDBCol md='6' className='mb-4'>
                <h6 className="fw-bold">Gender: </h6>
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline checked={isSelectedFemale} onChange={() => handleFemaleGenderClick()}/>
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline checked={isSelectedMale} onChange={() => handleMaleGenderClick()}/>
                <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline checked={isSelectedOther} onChange={() => handleOtherGenderClick()}/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='text'onChange={(e)=>setEmail(e.target.value)}/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='text'onChange={(e)=>setPhoneNumber(e.target.value)}/>
              </MDBCol>

            </MDBRow>
{/* 
            <MDBSelect
              label='Choose option'
              className='mb-4'
              size='lg'
              data={[
                { text: 'Choose option', value: 1, disabled: true },
                { text: 'Subject 1', value: 2 },
                { text: 'Subject 2', value: 3 },
                { text: 'Subject 3', value: 4 }
              ]}
              /> */}
            <MDBBtn className='mb-4' size='lg' onClick={() => handleRegister()}>Submit</MDBBtn>

          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
    )
}
export default Register ;