import Title from "./Title"

import { UseScroll } from '../../UseScroll';
import { motion} from 'framer-motion'; 
import { milestoneAnimations } from '../../animation';
function Blog() {
  const [element,controls]=UseScroll();
  const blogsData=[
    {
        title:'PARLOL JOURNAL',
        type:'SPA',
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ex, cupiditate quidem maxime aliquid officiis aperiam earum ipsum! Libero, quos!"
    },
    {
        title:'REFELOXY SKY',
        type:'Relax',
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ex, cupiditate quidem maxime aliquid officiis aperiam earum ipsum! Libero, quos!"
    },
    {
        title:'MEDITATION SUN',
        type:'YOGA',
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem ex, cupiditate quidem maxime aliquid officiis aperiam earum ipsum! Libero, quos!"
    }
  ]
  return (
    <>
<Title value='Blog'/>
<motion.div className="blogs" ref={element} animate={controls}  variants={milestoneAnimations} transition={{delay: 0.03, duration: 0.6, type: "tween"}}>
  {
    blogsData.map(({title,description,type})=>{
      return(
        <>
          <div className="blog">
            <div className="imagez"></div>
            <div className="titlez">
              <h3>{title}</h3>
            </div>
            <span className="typez">{type}</span>
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="morez">
              <img src="public/images/play.png" alt="" />
              <span>Read More</span>
            </div>
          </div>
        </>
      )
    })
  }
</motion.div>
    </>
  )
}

export default Blog