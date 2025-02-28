import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow relative overflow-hidden`}>
      <div className='flex-1 flex flex-col relative z-[1]'>
        <h2 className={styles.heading2}>Prêt à découvrir le futur du trading?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Explorez comment mon système d'hypertrading redéfinit les standards de performance en alliant technologie de pointe et précision mathématique.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 relative z-[1]`}>
        <Button text="Explorer la technologie"/>
      </div>
    </section>
  )
}

export default CTA
