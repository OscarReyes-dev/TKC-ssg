
import Image from 'next/image'
import heroImage from '/public/images/keyboard-images/new-hero.jpg'
import styles from '/components/sections/heros/hero-1/hero.module.css'







const Hero = () => (

    // <!-- Hero Section -->
    <div className={styles['hero-section']}>
    <div className={styles['hero-grid']}>
      <div className={styles['hero-style2']}>
        <div className={styles['hero-style3']}>
          <div className={styles['hero-image-style']}>
                                                                           
         <div className={styles['img']} >
                <Image
                  src={heroImage}
                    layout="fill"
                    objectFit="cover"
                    alt="Hero Image"
                    priority={true}
                    placeholder="blur"
                />
          </div>
         </div>
        </div>
      </div>
      <div className={styles['hero-textbox']}>
        <div className={styles['textbox-background']}>
          <div className={['top-Text']}>LATEST RELEASE</div>
          <h1 className={styles['main-Text']}>VOR-TECH WRX211</h1>
          <div className={styles['textbox-button']}>
            <button aria-label="Shop Collection" className={['shop-Collection--Btn']}>
              <a href="">Shop Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  
    <div className="transparent-bg"></div>
    </div>
)
export default Hero