import {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {styles} from '../styles';

import { EarthCanvas} from './canvas';
import SectionWrapper from '../hoc'
import {slideIn} from '../utils/motion';


//service_l7kspcq
//template_a9f932m
//template_a9f932m
//Z80lM5wT5J3bzYEQg

const Contact = () => {
  const formRef = useRef();
  const [form,setForm] = useState({
    name: '',
    email:'',
    message:'',
  })

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm({...form,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    //template_a9f932m
    //Z80lM5wT5J3bzYEQg
    emailjs.send(
      'service_l7kspcq',
      'template_a9f932m',
      {
        from_name : form.name,
        to_name: 'Bhawna',
        from_email:form.email,
        to_email:'bhawna.sharma3494@gmail.com',
        message: form.message,
      },
      'Z80lM5wT5J3bzYEQg'
    )

    .then(()=>{
      setLoading(false);
      alert('Thankyou, I will get back to you as soon as possible')

      setForm({
        name:'',
        email:'',
        message:'',
      },
       (error)=>{
        setLoading(false);
        console.log(error);
        alert('Something went wrong')
      })
    })

  }  

  return (
    <section section id="contact">
    <div className='xl:mt-12 xl:flex-row  flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left','tween',0.2,1)}
        className='flex-[0.75] bg-[#2d3335] p-8 rounded-2xl '
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef}
              onSubmit={handleSubmit}  
              className='mt-12 flex flex-col gap-8'
        >
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input 
              type = 'text'
              name = 'name'
              required
              value = {form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-[#12191b] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Email</span>
          <input 
              type = 'email'
              name = 'email'
              required
              value = {form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-[#12191b] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
          <textarea
              rows='7'
              name = 'message'
              value = {form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-[#12191b] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
        </label>
        <button
          type='submit'
          className='bg-[#368f9b] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-gray-700 rounded-xl'
        >
            {loading? 'Sending...':'Send'}
        </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right','tween',0.2,1)}
                  className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'           
      >
        <EarthCanvas />

      </motion.div>
    </div>
    </section>
  )
}

export default SectionWrapper(Contact,"contact");
