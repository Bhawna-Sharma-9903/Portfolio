import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';
import heroBg from '../assets/blackBG.jpg';

const Hero = () => {
  return (
    <section 
    className='relative w-full h-screen mx-auto'
    style={{backgroundImage:`url(${heroBg})`}}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-9xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-12'>
          <div className='w-5 h-5 mt-12 rounded-full bg-[#71c9c9]' />
          <div className='w-1 sm:h-80 h-40'
          style={{background: 'linear-gradient(to right, #008080, #00FFFF)'}}/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white mt-20`}>Hi, I'm <span className='text-[#71c9c9]'>Bhawna</span></h1>
          <p  className={`${styles.heroSubText} mt-2 text-whit-100`}>
            I develop 3D visuals, user <br className='sm:block hidden'/>interfaces 
            and web applications.</p>
        </div>
        <ComputersCanvas />
        {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div 
                    animate={{y:[0,5,0]}}
                    transition={{
                      duration:1.5,
                      repeat: Infinity,
                      repeatType:'loop'
                    }}
                  className="w-1 h-1 rounded-full bg-secondary mb-1"
                />
            </div>
          </a>
        </div> */}
      </div>
      

    </section>
  )
}

export default Hero