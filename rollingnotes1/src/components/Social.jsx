import React from 'react'
import "../index.css"
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

const Social = () => {
  return (
    <div className="ch w-full h-[540px] hover:cursor-default">
        <div className="pgg">
            <p className="follow">Follow our Socials:</p>
        </div>
        <div className="mediagg">
            <div className="igg">
                <AiOutlineInstagram className="insta"/>
            </div>
            <div className="fgg">
                <FaFacebookF className="facebook" />
            </div>
            <div className="tgg">
                <FaTwitter className="twitter" />
            </div>
        </div>
    </div>
  )
}

export default Social