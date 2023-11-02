import { BsFacebook, BsTwitter, BsYoutube ,BsBehance} from 'react-icons/bs'
import { UseScroll } from '../../UseScroll';
import { motion} from 'framer-motion'; 
import { footerAnimation } from '../../animation';

function Footer() {
  const [element,controls]=UseScroll();
  return (
    <>
    <motion.div className='footer' ref={element} animate={controls}  variants={footerAnimation} transition={{delay: 0.03, duration: 0.6, type: "tween"}}>
      <span>
        &copy; React Website Transition Animation
      </span>
      <div className="footer__social__icons">
        <BsFacebook/>
        <BsTwitter/>
        <BsYoutube/>
        <BsBehance/>
      </div>
    </motion.div>
    </>
  )
}

export default Footer