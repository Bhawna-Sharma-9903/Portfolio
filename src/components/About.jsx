/* eslint-disable react/no-unknown-property */
import React from 'react'
// import Tilt from 'react-tilt'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { Tilt } from 'react-tilt';
import {services} from '../constants';
import { fadeIn , textVariant } from '../utils/motion'
import dots from '../assets/dotsBlack.jpg';
import SectionWrapper  from '../hoc';



const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-[250px] ">
        <motion.div
          variants={fadeIn("right","spring",0.5*index,0.75)}
          className='w-full bg-[#0e0c0c] p-[1px] rounded-[20px] shadow-card-pink '
          style={{ boxShadow: '0 4px 6px rgba(0, 191, 255, 0.1)' }}

        >
          <div
            options={{
              max:45,
              scale:1,
              speed:450
            }}
          className=' rounded-[20px] py-5 px-12 min-h-[280px] ml-20px flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title}
              className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>

        
          
       </Tilt>
  )
}

const About = () => {
  return (
    <section id='about' 
    // style={{backgroundImage:`url(${dots})`}}
      // style={{backgroundColor:'#0e0c0c'}}
    >
        <motion.div variants={textVariant()}>
          <p  className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
    
    <motion.p  
        variants={fadeIn("","",0.1,1)}
        className='mt-4 ml-50 text-secondary text-[17px] max-w-3xl leading-[30px] '
    >
      Hey there! I'm a B.Tech grad with a knack for coding in C/C++, React JS, JavaScript, and Python. I'm your go-to person for front-end development using HTML, Tailwind CSS, and MaterialUI. I've got the database game covered with SQL and have danced my way through frameworks like Django and Vite. Ever tried OpenCV for computer vision? Well, I have! And I've got Three.js in my toolkit for those cool 3D graphics. With a solid base in IoT and DBMS, I'm all about delivering top-notch solutions. Check out my GitHub – I'm all about quality and collaboration. Let's tackle some tech challenges together!
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10 ">
      {services.map((service,index)=> (<ServiceCard key={service.title} index={index}{...service} />))}

    </div>
    </section>
    

    
  )
}

export default SectionWrapper(About, "about")