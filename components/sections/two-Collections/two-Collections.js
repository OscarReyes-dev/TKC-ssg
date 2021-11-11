
import Image from 'next/image'
import tcImage1 from '/public/images/keyboard-images/mats-coll.jpg'
import tcImage2 from '/public/images/keyboard-images/collection-Hero.jpg'
import styles from '/components/sections/two-Collections/two-Collections.module.css'






const TwoCollections = () => (
    <div className={styles['two-collections']}>
      <div className={styles['grid-container']}>
        <div className={styles['collection']}>
          <div className={styles['grid-item'] + " " + styles['left-img']}>


                        <div style={{position:"relative", width:"100%", height: "auto"}}>
                            <Image
                                // style={{width: "100%", height: "auto"}}
                                src={tcImage1}
                                objectFit="cover"
                                alt="Hero Image"
                                priority={true}
                                placeholder="blur"
                                width={4000} 
                                height={280} 

                            />
                        </div>
          </div>
          <div className={styles['grid-item'] + " " + styles['left-text']}>
            <h3 className={styles['image-Title']}>Shopping for Mats?</h3>
             
                <p className={styles['image-Text']}>The Keyboard Crew has the hottest mats in the market !Th the hottest mats in tht ! The Keyboard Crew has the hottest mats in the market !Th the hottest mats in tht !</p>
              
            <div className={['textbox-button']}>
              <button aria-label="Shop Collection" className={['shop-Collection--Btn']}>
                <a href="">Shop Now</a>
              </button>
            </div>
          </div>
        </div>
        <div className={styles['collection']}>
          <div className={styles['grid-item'] + " " + styles['right-img']}>
            {/* <Image src="assets/images/keyboard-images/collection-images/black-keyboard.jpg" className="hero" alt="" loading="lazy"/> */}
            <Image
                                // className={styles[""]}
                                src={tcImage2}
                                priority={true}
                                alt="The Keyboard Crew Logo"
                                placeholder="blur"
                                // className={styles['hero']}
                                width={4000} 
                                height={70} 
                                // width="100%" height="100%"
                                // style={{width: "", height: "600"}}

                                // layout="fill"
                                // objectFit="cover"
                                // alt="Hero Image"
                                // priority={true}
                               


                            />
                           {/* <Image src={tcImage1} alt="Girl in a jacket" width="" height="600" />  */}
          </div>
          <div className={styles['grid-item'] + " " + styles['right-text']}>
            <h3 className={styles['image-Title']}>Always In Style</h3>
            <p className={styles['image-Text']}>The Keyboard Crew has the hottest mats in the market !Th the hottest mats in tht ! The Keyboard Crew has the hottest mats in the market !Th the hottest mats in tht !</p>
            <div className={styles['textbox-button']}>
              <button aria-label="Shop Collection" className={['shop-Collection--Btn']}>
                <a href="">Shop Now</a>  
              </button>
            </div>
          </div>
        </div>
      </div>
  
    </div>


)
export default TwoCollections 