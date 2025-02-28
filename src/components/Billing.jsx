import React from 'react'
import { robot } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <div className="relative w-full h-full">
          <img
            src={robot}
            alt='trading robot'
            className='w-[100%] h-[100%] relative z-[5] object-contain rounded-[20px] opacity-90'
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-[6] rounded-[20px]" />
        </div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Une approche systématique <br className='sm:block hidden'/> du trading quantitatif</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Mon système d'hypertrading exploite les inefficiences du marché avec une précision milliseconde.
          Grâce à des algorithmes sophistiqués, je trade de manière autonome sur plus de 1000 actifs,
          assurant une performance stable et maîtrisée.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        </div>
      </div>  
    </section>
  )
}

export default Billing
