import Title from "./Title"
import { UseScroll } from '../../UseScroll';
import { motion} from 'framer-motion'; 
import { skillsAnimations} from '../../animation';

function Skills() {
  const [element,controls]=UseScroll();
  const skillsData=[
    {
      name:"Facial",
      amount:75,
    },{
      name:"SPA",
      amount:75,
    },
    {
      name:"Skin",
      amount:50,
    },
    {
      name:"Salon",
      amount:85,
    },
      {
      name:"Cosmetics",
      amount:90,
    },
  ]
  return (
    <>
    <div className="skill-managment" ref={element}>
    <Title value='skills'/>
    <div className="skills__title">
      <p>Our Skills</p>
      <h2>Check Our Super Awesome Skills</h2>
    </div>
    <motion.div className="skills" animate={controls}  variants={skillsAnimations} transition={{delay: 0.03, duration: 0.6, type: "tween"}}>
      <div className="skills__bars" >
        {
          skillsData.map(({name,amount})=>{
            return(
              <>
                <div className="skills__bars__bar" key={name}>
                <div className="skill-container">
                  <progress value={amount} max='100' color='white'/>
                  <span>{name}</span>
                </div>
                <h3>{amount}%</h3>
                </div>
              </>
            )
          })
        }
      </div>
      <div className="skill-content">
        <p className="skill-title font-bold">
          Lorem, ipsum dolor sit.
        </p>
        <p className="skill-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore nesciunt corrupti consectetur labore iste maiores vel porro quaerat accusamus quod nam enim doloremque, hic asperiores impedit facilis? Mollitia, nisi!
        </p>
      </div>
    </motion.div>
    </div>
    </>
  )
}

export default Skills