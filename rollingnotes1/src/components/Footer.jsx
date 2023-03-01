import React from 'react'
import fav from "../assets/favicon.jpeg"

const Footer = () => {
  return (
    <div className="flex flex-col bottom-0 top-[100%]">
      <div className="bottom-0 flex flex-row bg-[#54595f] h-[548px] py-[60px] px-[84px]">
            <div className="w-[252px] h-[280px] mr-[20px] flex items-center justify-around text-white/80 text-sm flex-col font-extrabold">
              <img src={fav} alt="rollingNotes" className="w-14 h-14"/>
              <p>ROLLINGNOTES</p>
              <p>+91 6002072097</p>
              <p>enquiry@rollingnotes.in</p>
              <p>Assam</p>
            </div>
            <div className="w-[252px] h-[280px] mr-[20px] text-[15px] font-bold left-0 flex flex-col ">
              <p className="text-white mb-6">LINKS</p>
              <p className="text-white/50 mb-6">Contribute</p>
              <p className="text-white/50 mb-6">Earn with us</p>
              <p className="text-white/50 mb-6">Sitemap - XML</p>
              <p className="text-white/50 mb-6">Site Policy</p>
              <p className="text-white/50 mb-6">App -Privacy Policy</p>
              <p className="text-white/50 mb-6">Feedback</p>
            </div>
            <div className="w-[252px] h-[280px] mr-[20px] text-[15px] font-bold left-0 flex flex-col ">
              <p className="text-white mb-6">MORE FROM US</p>
              <p className="text-white/50 mb-6">Competitions</p>
              <p className="text-white/50 mb-6">News</p>
              <p className="text-white/50 mb-6">Biolinks</p>
              <p className="text-white/50 mb-6">Current Affairs</p>
              <p className="text-white/50 mb-6">Services</p>
            </div>
            <div className="w-[252px] h-[280px] mr-[20px] text-s[15px] font-bold left-0 flex flex-col ">
              <p className="text-white mb-6">DOWNLOAD OUR FREE APP, NOW</p>
              <a href="https://play.google.com/store/apps/details?id=com.rollingnotes&pli=1" rel="noreferrer" target="_blank"><img src="https://i0.wp.com/rollingnotes.in/wp-content/uploads/2019/10/google-play-badge-e1572085496396.png?fit=500%2C194&ssl=1" alt="google_play" /></a>
              <a href="https://www.amazon.com/gp/product/B07ZN2QFDQ" rel="noreferrer" target="_blank"><img src="https://i0.wp.com/rollingnotes.in/wp-content/uploads/2019/10/amazon-appstore-badge-english-black-e1572085457628.png?fit=500%2C147&ssl=1" alt="amazon_appstore" /></a>
            </div>
            <div className="w-[252px] h-[280px] mr-[20px] text-[15px] text-white font-bold left-0 flex flex-col ">
              <p className="mb-6">CAREER WITH US</p>
              <input className="bg-white/10 h-8 p-3 outline-none mb-6" type="text" placeholder="Your Name" />
              <input className="bg-white/10 h-8 p-3 outline-none mb-6" type="text" placeholder="Your Email" />
              <input className="bg-white/10 h-8 p-3 outline-none mb-6" type="text" placeholder="Your Phone Number" />
              <input className="bg-white/10 p-3 h-fit outline-none mb-6" type="text" placeholder="How do you feel you can be helpful to us? Attach anything you want us to see, below" />
              <button className="bg-white text-[#54595f] rounded-sm hover:text-white hover:bg-white/10">Choose Files</button>
            </div>
      </div>
      <div className="flex flex-row bottom-0 p-2 w-full h-[50px] bg-[#43464c] text-white/30">
          <p className="font-extralight mt-2 text-[12px]">Copyright 2019-2021 RollingNotes, rollingnotes.in and all related - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer