import React from 'react'
import tradingImg from '../assets/2023-12-18-e82486081d8620a6e96a37dd5face32b.webp'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Une stratégie éprouvée <br className='sm:block hidden'/>et performante</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Mon système d'hypertrading a fait ses preuves avec plus de 60% de rendement annuel.
          La diversification sur plus de 1000 actifs et une gestion rigoureuse du risque
          me permettent d'obtenir des résultats stables et réguliers.
        </p>
        <Button styles='mt-10' text="Découvrir la stratégie"/>
      </div>
      <div className={layout.sectionImg}>
        <div className="relative w-full h-full">
          <img
            src={tradingImg}
            alt='trading analysis'
            className='w-[100%] h-[100%] relative z-[5] object-cover rounded-[20px] opacity-90'
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-transparent to-primary/90 z-[6] rounded-[20px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-[6] rounded-[20px]" />
        </div>
      </div>
    </section>
  )
}

export default CardDeal
