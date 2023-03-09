import React from 'react';
import './Rsvp.css';

export default function Rsvp() {

  return (
        <div className="container m-5" >
          <div className="rsvp-container">
            <form id="myForm" name="rsvp" method="post">
              <input type="hidden" name="form-name" value="rsvp" />
              <div className="mb-3">
                <label className="form-label">
                  <h2>Full name</h2>
                </label>
                <input className="form-control" type="text" id="attendee_name" name="user_name" required />
              </div>

              <br/>

              <label className="form-label">
                <h2>Can you make it?</h2>
              </label>
              <div className="mb-3">
                <label for="yes">YES, I'm so ready to partay!!!</label><br/>
                <input className="form-control" type="radio" id="yes" name="attendance" value="YES" required></input>
              </div>

              <br/>

              <div className="mb-3">
                <label for="no">No, sadly not 😢</label><br/>
                <input className="form-control" type="radio" id="no" name="attendance" value="NO"></input>
              </div>

              <br/>

              <div className="mb-3">
                <label className="form-label">
                <h2>Any dietary requirements we should know about?</h2>
                </label>
                <textarea className="form-control" id="message" name="diet" />
              </div>

              <button className="button" type="submit" value="send">
                Send
              </button>
            </form>
          </div>
        </div>
  )
};
