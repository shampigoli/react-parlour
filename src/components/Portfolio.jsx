
import { UseScroll } from '../../UseScroll';
import { motion} from 'framer-motion'; 
import { portfolioAnimation } from '../../animation'
function Portfolio() {
  const [element,controls]=UseScroll();
  return (
    <>
      <div className="portfolio" ref={element}>
        <div className="grid-portfolio">
          <motion.div className="child-one grid-box" animate={controls} variants={portfolioAnimation} transition={{delay:0.03, type:"tween" ,duration:0.2}}></motion.div>
          <motion.div className="child-two grid-box"  animate={controls} variants={portfolioAnimation} transition={{delay:0.03, type:"tween" ,duration:0.8}}></motion.div>
          <motion.div className="child-three grid-box" animate={controls}  variants={portfolioAnimation} transition={{delay:0.03, type:"tween" ,duration:0.8}}></motion.div>
          <motion.div className="child-four grid-box"  animate={controls} variants={portfolioAnimation} transition={{delay:0.03, type:"tween" ,duration:0.8}}></motion.div>
          <motion.div className="child-five grid-box" animate={controls} variants={portfolioAnimation} transition={{delay:0.03, type:"tween" ,duration:0.8}}></motion.div>
          <motion.div className="child-six grid-box" animate={controls} variants={portfolioAnimation} transition={{delay:0.03, type:"tween" ,duration:0.8}}></motion.div>
          <motion.div className="child-seven grid-box" animate={controls} variants={portfolioAnimation} transition={{delay:0.03, type:"tween" ,duration:0.8}}></motion.div>
          <motion.div className="child-eight grid-box" animate={controls} variants={portfolioAnimation} transition={{delay:0.03, type:"tween" ,duration:0.8}}></motion.div>
        </div>
        <div className="portfolio-more">
          <span>Load More</span>
          <img src="public/images/loadmore.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Portfolio