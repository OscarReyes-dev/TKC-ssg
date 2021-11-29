
import Image from 'next/image'
import productImage from '/public/images/keyboard-images/keyboard-product.jpg'
import Link from 'next/link'
import styles from '/components/sections/six-products/six-products-collection.module.css'







const Sixproductscollection = () => (

    // <!-- 6 Products Collection -->
    <div className={styles['products-collection']}>
  



<div className={styles['Section-title-container']}>
  <div className={styles['section-title']}>
    <div className={styles['top-text']}>STOP BEING SO BASIC .</div>
    <div className={styles['bottom-text']}>👇 Vor-Tech Is Here 👇</div>
  </div>
</div>


      <div className={styles["container"]}>
  
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 ">
  
  


 
  
        <div className={styles['product'] + " " + styles['col']}>
            <div className={['produt-container']}>

                <Link href="/productsPage">
                  <a className={styles['product-block']}>
                    <div className={styles['grid-item']}>

                      <div className={styles['product-img']} >
                              <div className={styles['img']}>
                                  <Image
                                      className={styles["popup-Logo"]}
                                      src={productImage}
                                      alt="Products Title for image"
                                      objectFit="cover"
                                      placeholder="blur"
                                  />

                              <div className={styles['overlay']}>
                                <div className={styles['svg-Image']}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                  </svg>
                                </div>
                              </div>
                        </div>

                        </div>


                      <div className={styles['item--description']}>
                          <div className={styles['collection--title']}>Vor-Tech</div>
                            <div className={styles['product--item-title']}>
                              <div className={styles['prod--title']}>Lava 2WR</div>
                            </div>
                            <div className={['product--item-price']}>$280.00</div>
                      </div>
                    </div>
                  </a>
                </Link>

                <div className={['add-Product-To-Cart--btn']}>
                  <div className={['centered--button']}>
                    <div className={styles['textbox-button']}>
                      <button aria-label="Add to Cart" className={styles['add-To-Cart--Btn']}       type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <a className={styles['icon']}>Add to Cart</a>
                      </button>
                    </div>
                  </div>
                </div>

              
            </div>

        </div>
  
  




 
  
        <div className={styles['product'] + " " + styles['col']}>
            <div className={['produt-container']}>

                <Link href="/productsPage">
                  <a className={styles['product-block']}>
                    <div className={styles['grid-item']}>

                      <div className={styles['product-img']} >
                              <div className={styles['img']}>
                                  <Image
                                      className={styles["popup-Logo"]}
                                      src={productImage}
                                      alt="Products Title for image"
                                      objectFit="cover"
                                      placeholder="blur"
                                  />

                              <div className={styles['overlay']}>
                                <div className={styles['svg-Image']}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                  </svg>
                                </div>
                              </div>
                        </div>

                        </div>


                      <div className={styles['item--description']}>
                          <div className={styles['collection--title']}>Vor-Tech</div>
                            <div className={styles['product--item-title']}>
                              <div className={styles['prod--title']}>Lava 2WR</div>
                            </div>
                            <div className={['product--item-price']}>$280.00</div>
                      </div>
                    </div>
                  </a>
                </Link>

                <div className={['add-Product-To-Cart--btn']}>
                  <div className={['centered--button']}>
                    <div className={styles['textbox-button']}>
                      <button aria-label="Add to Cart" className={styles['add-To-Cart--Btn']}       type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <a className={styles['icon']}>Add to Cart</a>
                      </button>
                    </div>
                  </div>
                </div>

              
            </div>

        </div>
  




 
  
        <div className={styles['product'] + " " + styles['col']}>
            <div className={['produt-container']}>

                <Link href="/productsPage">
                  <a className={styles['product-block']}>
                    <div className={styles['grid-item']}>

                      <div className={styles['product-img']} >
                              <div className={styles['img']}>
                                  <Image
                                      className={styles["popup-Logo"]}
                                      src={productImage}
                                      alt="Products Title for image"
                                      objectFit="cover"
                                      placeholder="blur"
                                  />

                              <div className={styles['overlay']}>
                                <div className={styles['svg-Image']}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                  </svg>
                                </div>
                              </div>
                        </div>

                        </div>


                      <div className={styles['item--description']}>
                          <div className={styles['collection--title']}>Vor-Tech</div>
                            <div className={styles['product--item-title']}>
                              <div className={styles['prod--title']}>Lava 2WR</div>
                            </div>
                            <div className={['product--item-price']}>$280.00</div>
                      </div>
                    </div>
                  </a>
                </Link>

                <div className={['add-Product-To-Cart--btn']}>
                  <div className={['centered--button']}>
                    <div className={styles['textbox-button']}>
                      <button aria-label="Add to Cart" className={styles['add-To-Cart--Btn']}       type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <a className={styles['icon']}>Add to Cart</a>
                      </button>
                    </div>
                  </div>
                </div>

              
            </div>

        </div>
  




 
  
        <div className={styles['product'] + " " + styles['col']}>
            <div className={['produt-container']}>

                <Link href="/productsPage">
                  <a className={styles['product-block']}>
                    <div className={styles['grid-item']}>

                      <div className={styles['product-img']} >
                              <div className={styles['img']}>
                                  <Image
                                      className={styles["popup-Logo"]}
                                      src={productImage}
                                      alt="Products Title for image"
                                      objectFit="cover"
                                      placeholder="blur"
                                  />

                              <div className={styles['overlay']}>
                                <div className={styles['svg-Image']}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                  </svg>
                                </div>
                              </div>
                        </div>

                        </div>


                      <div className={styles['item--description']}>
                          <div className={styles['collection--title']}>Vor-Tech</div>
                            <div className={styles['product--item-title']}>
                              <div className={styles['prod--title']}>Lava 2WR</div>
                            </div>
                            <div className={['product--item-price']}>$280.00</div>
                      </div>
                    </div>
                  </a>
                </Link>

                <div className={['add-Product-To-Cart--btn']}>
                  <div className={['centered--button']}>
                    <div className={styles['textbox-button']}>
                      <button aria-label="Add to Cart" className={styles['add-To-Cart--Btn']}       type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <a className={styles['icon']}>Add to Cart</a>
                      </button>
                    </div>
                  </div>
                </div>

              
            </div>

        </div>
  







 
  
        <div className={styles['product'] + " " + styles['col']}>
            <div className={['produt-container']}>

                <Link href="/productsPage">
                  <a className={styles['product-block']}>
                    <div className={styles['grid-item']}>

                      <div className={styles['product-img']} >
                              <div className={styles['img']}>
                                  <Image
                                      className={styles["popup-Logo"]}
                                      src={productImage}
                                      alt="Products Title for image"
                                      objectFit="cover"
                                      placeholder="blur"
                                  />

                              <div className={styles['overlay']}>
                                <div className={styles['svg-Image']}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                  </svg>
                                </div>
                              </div>
                        </div>

                        </div>


                      <div className={styles['item--description']}>
                          <div className={styles['collection--title']}>Vor-Tech</div>
                            <div className={styles['product--item-title']}>
                              <div className={styles['prod--title']}>Lava 2WR</div>
                            </div>
                            <div className={['product--item-price']}>$280.00</div>
                      </div>
                    </div>
                  </a>
                </Link>

                <div className={['add-Product-To-Cart--btn']}>
                  <div className={['centered--button']}>
                    <div className={styles['textbox-button']}>
                      <button aria-label="Add to Cart" className={styles['add-To-Cart--Btn']}       type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <a className={styles['icon']}>Add to Cart</a>
                      </button>
                    </div>
                  </div>
                </div>

              
            </div>

        </div>
  






 
  
        <div className={styles['product'] + " " + styles['col']}>
            <div className={['produt-container']}>

                <Link href="/productsPage">
                  <a className={styles['product-block']}>
                    <div className={styles['grid-item']}>

                      <div className={styles['product-img']} >
                              <div className={styles['img']}>
                                  <Image
                                      className={styles["popup-Logo"]}
                                      src={productImage}
                                      alt="Products Title for image"
                                      objectFit="cover"
                                      placeholder="blur"
                                  />

                              <div className={styles['overlay']}>
                                <div className={styles['svg-Image']}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                  </svg>
                                </div>
                              </div>
                        </div>

                        </div>


                      <div className={styles['item--description']}>
                          <div className={styles['collection--title']}>Vor-Tech</div>
                            <div className={styles['product--item-title']}>
                              <div className={styles['prod--title']}>Lava 2WR</div>
                            </div>
                            <div className={['product--item-price']}>$280.00</div>
                      </div>
                    </div>
                  </a>
                </Link>

                <div className={['add-Product-To-Cart--btn']}>
                  <div className={['centered--button']}>
                    <div className={styles['textbox-button']}>
                      <button aria-label="Add to Cart" className={styles['add-To-Cart--Btn']}       type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <a className={styles['icon']}>Add to Cart</a>
                      </button>
                    </div>
                  </div>
                </div>

              
            </div>

        </div>
  


























        </div>
      </div>
  
  
  
      <div className="collection-button">
        <div className="centered--button">
          <div className="textbox-button">
            <button aria-label="Shop Collection" className="shop-Collection--Btn">
              <a href="">Shop Vor-Tech Collection</a>
            </button>
          </div>
        </div>
      </div>
  
    </div>


)
export default Sixproductscollection