import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidemenu from "./Sidemenu";
import Header from "./Header";
import Footer from "./Footer";

function BecomeHost() {

  const navigate = useNavigate();
  const [userId, setUserId] = useState('')
  const email = localStorage.getItem('user');
  console.log(email)
  function handleYes() {


    const userInput = { emailId: email }

    fetch("user/emailId", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(userInput),
    })
      .then(res => {
        if (!res.ok) {
          console.log("Error in User Lookup")
        } else {
          return res.json()
        }

      })
      .then((data) => {
        console.log(data.userId)
        setUserId(data.userId);
        console.log(userId)
        const input = { userId: data.userId }
        fetch("hostsignup", {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(input),
          method: 'POST'
        })
          .then(res => {

            if (!res.ok) {
              console.log("Error in Host Signup")
            } else {
              return res.json()
            }
          })
          .then((data) => {

            localStorage.setItem("isHost", true);
            navigate("/home")

          });

      });



  }

  function handleNo() {
    navigate("/home")
  }

  return (
    <div>
      <div>
        <div className="wrapper">
          <Sidemenu></Sidemenu>
          <div id="content">
            <Header></Header>

            <div className="hostcontainer">
              <p className="hostpara mb-4">
                Are you sure you want to <br className="hidden-ss"></br>become a host?
              </p>
              <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mr-4" role="group" aria-label="First group">
                  <button type="button" onClick={handleYes} className="btn btn-outline-success hostacceptButton">Yes</button>

                </div>
                <div className="btn-group" role="group" aria-label="Third group">
                  <button type="button" onClick={handleNo} className="btn btn-outline-danger hostdeclineButton">No</button>
                </div>
              </div>
              {/* <button
                  type="submit"
                  className="btn btn-outline-success hostacceptButton"
                >
                  Yes
                </button>
                
                <button
                  type="submit"
                  className="btn btn-outline-danger hostdeclineButton"
                >
                  No
                </button> */}
            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BecomeHost;