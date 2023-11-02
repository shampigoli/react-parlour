import Title from "./Title"
import { UseScroll } from '../../UseScroll';
import { motion} from 'framer-motion'; 
import { milestoneAnimations } from '../../animation';

function Contact() {
  const [element,controls]=UseScroll();
  return (
    <>
      <Title value='Contact'/> 
      {/* section */}
      <div className="contact-main" ref={element}>

      <motion.div className="contact" animate={controls}  variants={milestoneAnimations} transition={{delay: 0.03, duration: 0.6, type: "tween"}}>
        <div className="contact__title">
          <p>Stay in touch with me</p>
          <h2>Quick Contact</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Just to say Hi !!</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, assumenda.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis aliquam consequuntur dolore blanditiis molestiae vitae deleniti tempore libero nobis!</p>
          <p>
            <strong>Address :</strong> 5 G ShadBagh Lahore
          </p>
          <p>
            <strong>Email :</strong>alijawad1109@gmail.com
          </p>
          <p>
            <strong>Website :</strong> www.AjStyles.com
          </p>
          </div>
      <div className="contact__data_form">
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <textarea name="" placeholder="message"></textarea>
        <button className="contact-btn">Send Message</button>
      </div>
        </div>
      </motion.div>
      </div>
    </>
  )
}

export default Contact