import styles from '../style'
import { discount } from '../assets'
import { images } from '../constants/images'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img
            src={discount}
            alt='discount'
            className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>60%+</span> de Performance {" "}
            <span className='text-white'>Annuelle</span> Validée
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            La Précision de {" "} <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>l'Algorithme</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          au Service du Trading.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Mon système d'hypertrading analyse en temps réel plus de 1000 actifs financiers. 
          La puissance du quantitatif combinée à une gestion millimétrée du risque pour des performances exceptionnelles.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={images.hero}
            alt='trading technology'
            className='w-[100%] h-[100%] relative z-[5] object-cover rounded-[25px] opacity-85 transition-all duration-500 hover:opacity-95'
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-transparent to-primary/90 z-[6] rounded-[25px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-[6] rounded-[25px]" />
          <div className="absolute inset-0 bg-[#00040f]/10 mix-blend-overlay z-[7] rounded-[25px]" />
        </div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 opacity-30 blur-xl" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient opacity-50 blur-lg"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient opacity-40 blur-xl" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
