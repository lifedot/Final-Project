import '../utils/UserAccount.css';

import Image from 'react-bootstrap/Image';
import { nameProps } from '../utils/types';


const UserAccount = (props: nameProps) => {
  
  return(
   <>
<div className="container">

    <div className="main-body">     
          
              <div className="bg">            
              <div className="row gutters-sm">

import { nameProps } from '../utils/types';
import React, { useState, useEffect, useContext } from 'react'
import { userContext } from '../utils/userContext'



const UserAccount = () => {

  const {propsObj, setPropsObj} = useContext(userContext)

  return (
    <>
      <div className="container">
        <div className="main-body">




          <div className="row gutters-sm">

            <div className="col-md-4 mb-3 mt-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQENJn5vvnAqgA/profile-displayphoto-shrink_800_800/0/1627999158218?e=1633564800&v=beta&t=LYO8klYD-nQqNifC8hBd9tNjy2a1MNLliRVOuY_j2kM" alt="Admin" className="rounded-circle" width="150"></img>
                    <div className="mt-3">
                      <h4>Adam Vaughn</h4>
                      <p className=" mb-1">Full Stack Developer/Heavy-Metal Drummer</p>
                      <p className="font-size-sm">Birmingham, Alabama</p>
                      <button className="btn btn-dark">Follow</button>
                      <button className="btn btn-dark m-1">Booking Availability</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span>https://adammathewvaughn.com</span>
                  </li>                  
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span>@adammathewv</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span>adammathewvaughn</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span>adammathewvaughn</span>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8 mt-4">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 ">
                     Adam Vaughn
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 ">
                      adammathewvaughn@gmail.com
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 ">
                      (205) 424-6933
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 ">
                      (205) 704-2050
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 ">
                      8040 Weaver Rd.
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-dark " target="__blank" href="https://www.adammathewvaughn.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">

                      <h6 className="d-flex align-items-center mb-3">Tickets Sales For ™︁<i><b>Performance </b></i>  Venues</h6>
                      <small>BJCC</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "90%"}} ></div>
                      </div>
                      <small>Boutwell Auditorium</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "65%"}} ></div>
                      </div>
                      <small>Oak Mtn. Ampitheatre</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "75%"}} ></div>
                      </div>
                      <small>Bridgestone Arena</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "55%"}} ></div>
                      </div>
                      <small>Music City Center</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "76%"}} ></div>

                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>Web Design</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "80%" }} ></div>
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "72%" }} ></div>
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "89%" }} ></div>
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "55%" }} ></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "66%" }} ></div>

                      </div>
                    </div>
                  </div>
                </div>

             
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">Merchandise Sales For ™︁<i><b>Performance </b></i>  Venues</h6>
                      <small>BJCC</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "65%"}} ></div>
                      </div>
                      <small>Boutwell Auditorium</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "72%"}} ></div>
                      </div>
                      <small>Oak Mtn. Ampitheatre</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} ></div>
                      </div>
                      <small>Bridgestone Arena</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "75%"}} ></div>
                      </div>
                      <small>Music City Center</small>
                      <div className="progress mb-3" style={{height: "5px"}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "56%"}} ></div>
                      </div>
                    </div>
                  </div>
                
                
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>




      </div>




    </>
  );
}

export default UserAccount;

