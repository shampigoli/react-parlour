// import styled from "styled-components"
import Navbar from './Navbar';
import{ motion } from 'framer-motion'
import { homeAnimation,homeInfoAnimation } from '../../animation';
function Home() {
  return (
    <>
    <div className='home-bg'>
    <Navbar/>
    <motion.div className="home" variants={homeAnimation} transition={{delay: 0.3, duration: 0.6, type: "tween"}}>
      <div className="content">
        <div className="xxtitle">
          <h1>AJ Styles Parlour</h1>
        </div>
        <div className='subTitle'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, velit fuga. Veniam atque iure nihil, neque distinctio accusamus earum
          </p>
        </div>
        <img src="public/images/play.png" alt="" className='h-[50px]' />
      </div>
    </motion.div>
    <motion.div className="info" variants={homeInfoAnimation} transition={{delay: 0.3, duration: 0.6, type: "tween"}}>
    <div className="grid">
      <div className="col">
        <strong>Parlour</strong>
        <p>AJ Academy</p>
      </div>
      <div className="col">
        <strong>Email</strong>
        <p>ajstyles@gmail.com</p>
      </div>
      <div className="col">
        <strong>Mobile</strong>
        <p>+92 3164944176</p>
      </div>
      <div className="col">
        <strong>Address</strong>
        <p>5-G ShadBagh <br /> Lahore.</p>
      </div>
      <div className="col">
        <strong>Services</strong>
        <p>sparking</p>
        <p>SPA Cream</p>
      </div>
      <div className="col">
        <strong>Working Hours</strong>
        <p>Monday to Friday</p>
        <p>8:00 - 12:00</p>
      </div>
    </div>
   </motion.div>
    </div>

    </>
  )
}

// const Section=styled.section`
// background:url(${Home}) no-repeat center;
// min-height:100vh,
// background-size:cover;
// position:relative;
// `;
export default Home