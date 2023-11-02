import { UseScroll } from '../../UseScroll';
import { motion} from 'framer-motion'; 
import { milestoneAnimations } from '../../animation';

function Video() {
  const [element,controls]=UseScroll();
  return (
    <>
      <div className="backgroundz" ref={element}>
        <motion.div className="video" animate={controls}  variants={milestoneAnimations} transition={{delay: 0.03, duration: 0.6, type: "tween"}}>
          <iframe
            width="560"
            height="400"
            src="https://www.youtube.com/embed/h_8l1nq-Org?si=gKc2F8I43WM8t44l"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </motion.div>
      </div>
    </>
  );
}

export default Video;
