import Title from "./Title"
import { UseScroll } from '../../UseScroll';
import { motion} from 'framer-motion'; 
import { milestoneAnimations } from '../../animation';

function Pricing() {
  const [element,controls]=UseScroll();
  const plans= [
    {
      name:'Basic',
      price:13,
    },
    {
      name:'Pro',
      price:35,
    },
    {
      name:'Expert',
      price:77,
    }
  ]
  const data= [
    {
       value:"Full Face Rs.250",
       type:'Basic'
    },
    {
       value:"Cheeks Rs.50",
       type:'Basic'
    },
    {
       value:"jawline Rs.90",
       type:'Basic'
    },
    {
       value:"LowerLip Rs.40",
       type:'Basic'
    },
    {
       value:"Upper Lip Rs.40",
       type:'Basic'
    },
    {
       value:"Under arms Rs.100",
       type:'Basic'
    },
    {
       value:"Full Leg Rs. 450",
       type:'Pro'
    },
    {
       value:"Half Leg Rs. 300",
       type:'Pro'
    },
    {
       value:"Daily Backups",
       type:'Expert'
    },
    {
       value:"One Click Setup",
       type:'Expert'
    },
  ]
  return (
    <>
    <Title value='Pricing'/>
    <div className="pricing-main" ref={element}>
    <div className="backgroundzz">
      <img src="public/images/pricing1.png" alt="" className="bg1"/>
      <img src="public/images/pricing2.png" alt="" className="bg2"/>
    </div>
    <div className="pricing__title">
      <p>Find your pricing plans</p>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quae odio voluptatum consequuntur mollitia maiores optio magnam obcaecati doloremque nisi.</h2>
    </div>
    <motion.div className="pricing" animate={controls}  variants={milestoneAnimations} transition={{delay: 0.03, duration: 0.6, type: "tween"}}>
      {plans.map(({name,price},index)=>{
        return(
          <>
            <div className="pricing__plan" key={index}>
            <div className="price-sequence">
              <div className="pricing__plan__name">
                <h2>{name}</h2>
              </div>
              <div className="pricing__plan__name__price">
                <span>$</span>
                <p>{price}</p>
              </div>
              </div>
            <div className="pricing__plan__content">
            <ul className={`pricing__plan__content__features ${name}`}>
                  {data.map(({ value, type }, index2) => {
                    return (
                      <div key={index2}>
                      <div className="boxset">
                        {name === "Basic" ? (
                          type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className="line">{value}</li>
                          )
                        ) : name === "Pro" ? (
                          type === "Basic" || type === name ? (
                            <li>{value}</li>
                          ) : (
                            <li className="line">{value}</li>
                          )
                        ) : (
                          name === "Expert" && <li>{value}</li>
                        )}
                        </div>
                      </div>
                    );
                  })}
                </ul>
                <div className="morez">
                  <span>Order Now!</span>
                  <img src="public/images/play.png" alt="Order Now" />
                </div>
            </div>
            </div>
          </>
        )
      })}
    </motion.div>
    </div>
    </>
  )
}

export default Pricing