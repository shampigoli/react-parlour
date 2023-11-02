import { useState } from "react"
import { UseScroll } from '../../UseScroll';
import { motion} from 'framer-motion'; 
import { milestoneAnimations } from '../../animation';

function Testimonials() {
  const [element,controls]=UseScroll();
  const [selected,setSelected]=useState(0);
  const testimonials=[
    {
      designation:"SPA",
      name:"Julie Baker",
      Reviews:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quae odio voluptatum consequuntur mollitia maiores optio magnam obcaecati doloremque nisi."
    },
    {
      designation:"Full Makeup",
      name:"Gaberilla",
      Reviews:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quae odio voluptatum consequuntur mollitia maiores optio magnam obcaecati doloremque nisi."
    },
    {
      designation:"Skin",
      name:"Natalia",
      Reviews:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quae odio voluptatum consequuntur mollitia maiores optio magnam obcaecati doloremque nisi."
    }
  ]
  return (
    <>
    <div className="containerxx" ref={element}>
      <motion.div className="testimonials" animate={controls}  variants={milestoneAnimations} transition={{delay: 0.03, duration: 0.6, type: "tween"}}>
        {
          testimonials.map(({designation,name,Reviews},index)=>{
            return(
              <>
                <div className={`testimonial ${selected === index ? "active" : "hidden"} `} key={index}>
                <div className="image-cir">
                  <div className="circle2">
                    <img src="public/images/loadmore.png" alt="loadmore" />
                  </div>
                </div>
                <div className="title-container">
                  <span className="designation">
                    {designation}
                  </span>
                  <h3 className="title-name">{name}</h3>
                </div>
                <p>
                  {Reviews}
                </p>
                </div>
              </>
            )
          })
        }
      </motion.div>
      <div className="controls">
        <button className={selected ===0 ? "active" : ""} onClick={()=>setSelected(0)}></button>
        <button className={selected ===1 ? "active" : ""} onClick={()=>setSelected(1)}></button>
        <button className={selected ===2 ? "active" : ""} onClick={()=>setSelected(2)}></button>
      </div>
    </div>
    </>
  )
}

export default Testimonials