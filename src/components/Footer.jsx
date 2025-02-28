import React from 'react'
import styles from '../style'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-primary/30 backdrop-blur-sm`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <div className='flex flex-col items-start'>
            <h1 className='font-poppins font-bold text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#5ce1e6] via-[#33bbcf] to-[#5ce1e6]'>
              AlgoTrading
            </h1>
            <div className='w-[60px] h-[2px] bg-gradient-to-r from-[#5ce1e6] to-[#33bbcf] mt-2'></div>
          </div>
          <p className={`${styles.paragraph} mt-6 max-w-[310px] text-dimWhite`}>
            Leader en trading quantitatif et market making. Performance, innovation et maîtrise du risque depuis plus de 10 ans.
          </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {link.title}
              </h4>
              <ul className='list-none mt-4'>
                {link.links.map((item, index) => (
                  <li 
                    key={item.name} 
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-colors duration-300 ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]/30'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite'>
          © 2024 <span className='text-gradient'>AlgoTrading</span>. L'excellence du trading quantitatif.
        </p>  
      </div>
    </section>
  )
}

export default Footer
