
import { UseScroll } from '../../UseScroll';
import { motion} from 'framer-motion'; 
import { milestoneAnimations } from '../../animation';
function Milestone() {
  const [element,controls]=UseScroll();
  const milestone=[
    {
      image:'public/images/milestone1.png',
      data:"Cleint Served",
      amount:"$877"
    },
    {
      image:'public/images/milestone2.png',
      data:"of raw data",
      amount:"1.4M"
    },
    {
      image:'public/images/milestone3.png',
      data:"Reviews",
      amount:"99.9M"
    },
  ]
  return (
    <>
    <div className="milesone-main" ref={element}>
<div className="background">
  <img src="public/images/milestone-background.png" alt="Milestone background" />
</div>
<motion.div className="milestones" animate={controls}  variants={milestoneAnimations} transition={{delay: 0.03, duration: 0.6, type: "tween"}}>
  {
    milestone.map(({image,data,amount})=>{
      return(
        <>
          <div className="milestone">
            <p>{amount}</p>
            <span>{data}</span>
            <img src={image} alt="milestone" />
          </div>
        </>
      )
    })
  }
</motion.div>
</div>
    </>
  )
}

export default Milestone