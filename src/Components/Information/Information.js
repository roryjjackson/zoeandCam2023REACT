import React from 'react';
import Committee from '../Commitee/Commitee';
import './Information.css';
import {useState} from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Popup from '../Popup/Popup';
// import UncontrolledExample from '../Gallery/Gallery';
import Countdown from '../Countdown/Countdown';
import Donate from '../Donate/Donate';

export default function Information() {
  const [isVis, setIsVis] = useState(false)
  const [buttonPopup, setButtonPopup] = useState(false)

  const handleClick = event => {
    setIsVis(current => true)
  }

    return (
      <div>

        <div className="divider">
          <p>Welcome! We may already be legally wed, but that doesn't mean we're missing the opportunity to celebrate with our nearest and dearest!</p>
          < Countdown />
          <div>
            <audio className="music-player" controls src="https://res.cloudinary.com/dfipoufmj/video/upload/v1675534541/This_Will_Be_An_Everlasting_Love_mutyct.mp3"></audio>
          </div>
        </div>


        <div className="section">
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1666015815/DSC02516_hw35a6.jpg" alt="not" className="block-left"></img>
          <div className="block-content block-right">
            <h3>The Venue</h3>
            <p>The Byre at Inchyra</p>
            <p>Glencarse, Perth PH2 7LU, UK</p>
            <a href="https://www.thebyreatinchyra.co.uk/" target="_blank" className="button" rel="noreferrer">Find out more</a>
          </div>
        </div>

        <div className="divider" id="committee">
          <h2>The wedding committee</h2>
        </div>

        < Committee />

        <div className="divider" id="Travel">
          <h2>Travel and Accomodation</h2>
        </div>

        <div className="section">
          <div className="block-content block-left">
            <h3>Travel</h3>
            <p>We have reserved a number of rooms at Travelodge Broxden at a discounted rate (10 mins from our venue). To book this, just fill in the form by clicking the button below.</p>
            <button onClick={ e => {handleClick(); setButtonPopup(true)}} className="button">Book Travelodge</button>
            <br/>
            <p>The venue has a list of local suggestions, but you should also be able to find plenty of options via booking.com or a good old fashioned Google search.</p>
            <br/>
            <p>If you're feeling brave, the estate offers free on-site camping with use of the bathroom facilities. Please do let us know if you're interested!</p>
          </div>
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1666015814/DSC02500_wn01f3.jpg" alt="" className="block-right"></img>
        </div>

        < Donate />


        <div style={{display: isVis ? 'block' : 'none'}}>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <ContactForm />
          </Popup>
        </div>

        {/* < UncontrolledExample /> */}

        {/* <div className="divider" id="Schedule">
          <h2>Things to note</h2>
        </div> */}

        <div className="section" id="things-to-note">
          <img src="https://res.cloudinary.com/dfipoufmj/image/upload/v1669048233/zoe_header_pic_q6rlbj.jpg" alt="" className="block-left"></img>
          <div className="block-content block-right">
            <h3 id="things-to-note-header">Things to note</h3>
            <p>DRESS CODE: <span id="formal-and-fancy">Formal and Fancy</span></p>
            <p className="small-p-tag">(umbrellas strongly advised)</p>
            <p>*Adult only affair*</p>
            <p>Any questions, email zoeandcam2023@gmail.com</p>
            <p>Mealtimes and toasts are on us. Party drinks are on you!</p>
            <br></br>
            <p className="small-p-tag">* If you prefer something a little stronger than vino, we will have a semi-subsidised bar that accepts all major debit / credit cards.</p>
            <p className="small-p-tag">No naughty hipflasks or outside beverages please - it interferes with licensing and will shut down our throwdown!</p>
          </div>
        </div>

        {/* <div className="divider" id="Music">
          <h2>Create a playlist</h2>
        </div> */}

      </div>
    )
}
