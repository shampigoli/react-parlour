// import{ service1} from 'src/assets/service1.png';
// import {service2} from 'src/assets/service2.png'
// import {service3} from 'src/assets/service3.png'
import Title from './src/components/Title';
import { UseScroll } from './UseScroll';
import { motion} from 'framer-motion'; 
import { servicesAnimations } from './animation';
function Services() {
  const [element,controls]=UseScroll();
  const date=[
    {
      type:"Blowout",
      text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, velit fuga. Veniam atque iure nihil, neque distinctio accusamus earum",
      image: "images/service1.png"
    },
    {
      type:"Olpalax",
      text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, velit fuga. Veniam atque iure nihil, neque distinctio accusamus earum",
      image:'images/service2.png'
    },
    {
      type:"Retach",
      text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, velit fuga. Veniam atque iure nihil, neque distinctio accusamus earum",
      image:'images/service3.png'
    }
  ]
  return (
    <>
    <div id='services' ref={element}>
      <Title value='services'/>
      <div className='services'>
      {
        date.map(({type,text,image},index)=>{
          return(
            <>
            <motion.div   animate={controls} variants={servicesAnimations} transition={{delay: 0.03, duration: 0.6, type: "tween"}}
             className='services__service'>
              <div className="services__service__image">
                <img src={image} alt="Service" />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
                <p className="services__service__description">{text}</p>
                <img src='public/images/play.png' alt="ReadMore" />
              </div>
            </motion.div>
            </>
          )
        })
      }
      </div>
    </div>
    </>
  )
}


export default Services