import Image from 'next/image'
import siteLogo from '/public/images/logo/TKC-1logo.png'
import cartProductImage from '/public/images/keyboard-images/keyboard-product.jpg'
import Link from 'next/link'
import styles from '/components/global/navigation/nav.module.css'







const Nav = () => (
<div> 


{/* Header */}

<header id={styles['header']}>



  {/* <!-- Top Row --> */}
  <div className={styles['top-row']}>
    <div className={styles['grid-container']}>

      <div className={styles["grid-item"] + " " + styles["item-1"]}>
        <ul className={styles['icons-list']}>
          <li className={styles['header-Menu--Btn']}>
            <button className={styles["hamburger"] + " " + styles["hamburger--spring"] + " " + styles["header-Menu--Btn"]} type="button" aria-label="Toggle Menu">
              <span className={styles['hamburger-box']}>
                <span className={styles['hamburger-inner']}></span>
              </span>
            </button>
          </li>
          <li className={styles['user-account']}>
            <button className={styles["account-Icon--Mobile"] + " " + styles["icon-Style"] + " " + styles["icon"]}>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor"
                className={["bi"] + " " + ["bi-person"]} viewBox="0 0 16 16">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <div className={styles['grid-item'] + " " + styles['item-2']}>
        <div className={styles["desktop-logo"]}>
          <Link href="/">
              <a>
                  <Image
                  className={styles["popup-Logo"]}
                  src={siteLogo}
                  // priority={true}
                  alt="The Keyboard Crew Logo"
                  width={75} 
                  height={28} 
                  placeholder="blur" 
                  />
              </a>
          </Link>
        </div>
      </div>
     
      <div className={styles["grid-item"] + " " + styles["item-3"]}>
        <div className={styles["icons"]}>
          <ul className={styles["icons-list"]}>
            <li className={styles["search"]}>
              <button className={styles["search-Button"] + " " + styles["icon-Style"] + " " + styles["icon"]} aria-label="Search Store Inventory"
                type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor"
                  className="bi bi-search" viewBox="0 0 16 16">
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </li>
            <li className={styles["user-account"]}>
              <button className={styles["account-Icon"] + " " + styles["icon"] + " " + styles["icon-Style"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor"
                  className="bi bi-person" viewBox="0 0 16 16">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </button>
            </li>
            <li className={styles["shopping-Bag"]}>



              <button className={"btn" + " " + styles["cartAndItems"] + " " + styles["icon-Style"] + " " + styles["icon"]} data-bs-toggle="offcanvas" type="button"
                aria-controls="offcanvasExample" data-bs-target="#offcanvasExample">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={["bi"] + " " + ["bi-bag"]}
                  viewBox="0 0 16 16">
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <div className={styles["numberofItems"]}>
                  13
                </div>
              </button>


         

            </li>
          </ul>
        </div>
      </div>
    
    
    </div>
  </div>






  {/* <!-- Bottom Secondary Row --> */}
  <div className={styles['header-secondary-row']}>

    <div id={styles['headerNavOpen']} className={styles['header-nav']}>

      <nav className={styles['meg-nav']}>

        {/* <!-- Secondary Row Nav Bar Link List --> */}
        <ul className={styles["nav"] + " " + ["justify-content-center"]}>
          {/* <!-- Keyboards --> */}
          <li className={styles["nav-item"]}>
            <Link href="/productsPage">
                <a className={styles["nav-Link"] + " " + styles["active"]}>Mechanical Keyboards<i className={styles["fa"] + " " + styles["fa-angle-right"]} aria-hidden="true"></i></a>
            </Link>
            {/* <!-- New DropDown --> */}
            <div className={styles["items"] + " " + styles["container"]}>

              <div className={styles["row"] + " " + ["justify-content-center"]}>
                <div className={styles["link-blocks"] + " " + ["col-12"]}>
                  <div className={styles["products-Column"]}>
                    <div className={styles["prodct-Title-Container"]}>
                      <Link href="/productsPage">
                      <a className={styles["product-Title"]}>Keyboard Brands</a>
                      </Link>
                    </div>
                    <div className={styles["submenu-wrapper"]}>

                      <div className={styles["nav-Col"]}>
                        <ul className={styles["product-Gen-List"]}>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a>Vor-Tech</a> 
                            </Link>  
                          </li>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a>Looper</a> 
                            </Link>
                          </li>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a>Infinite</a> 
                            </Link>
                          </li>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage"> 
                              <a>Slend</a>
                            </Link>
                          </li>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a>Infinite</a> 
                            </Link>
                          </li>
                          
                          
                          {/* <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a>Vor-Tech</a> 
                            </Link>  
                          </li>
                          <li className={styles["product-Generation"]}><Link href="/productsPage"><a>Looper</a> </Link></li>
                          <li className={styles["product-Generation"]}><Link href="/productsPage"><a>Infinite</a> </Link></li>
                          <li className={styles["product-Generation"]}><Link href="/productsPage"> <a>Slend</a></Link></li>
                          <li className={styles["product-Generation"]}><Link href="/productsPage"><a>Infinite</a> </Link></li>
                          <li className={styles["product-Generation"]}><Link href="/productsPage"><a>Slend</a> </Link></li> */}
                        </ul>
                      </div>
                      <div className={styles["nav-Col"]}>
                        <ul className={styles["product-Gen-List"]}>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a href="">View All</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </li>



          <li className={styles["nav-item"]}>
            <Link href="/productsPage">
                <a className={styles["nav-Link"] + " " + styles["active"]}>Mouses<i className={styles["fa"] + " " + styles["fa-angle-right"]} aria-hidden="true"></i></a>
            </Link>
            {/* <!-- New DropDown --> */}
            <div className={styles["items"] + " " + styles["container"]}>

              <div className={styles["row"] + " " + ["justify-content-center"]}>
                <div className={styles["link-blocks"] + " " + ["col-12"]}>
                  <div className={styles["products-Column"]}>
                    <div className={styles["prodct-Title-Container"]}>
                      <Link href="/productsPage">
                      <a className={styles["product-Title"]}>Mouse Brands</a>
                      </Link>
                    </div>
                    <div className={styles["submenu-wrapper"]}>

                      <div className={styles["nav-Col"]}>
                        <ul className={styles["product-Gen-List"]}>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a>Vor-Tech</a> 
                            </Link>  
                          </li>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a>Looper</a> 
                            </Link>
                          </li>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a>Infinite</a> 
                            </Link>
                          </li>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage"> 
                              <a>Slend</a>
                            </Link>
                          </li>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a>Infinite</a> 
                            </Link>
                          </li>
                          
                          
                          {/* <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a>Vor-Tech</a> 
                            </Link>  
                          </li>
                          <li className={styles["product-Generation"]}><Link href="/productsPage"><a>Looper</a> </Link></li>
                          <li className={styles["product-Generation"]}><Link href="/productsPage"><a>Infinite</a> </Link></li>
                          <li className={styles["product-Generation"]}><Link href="/productsPage"> <a>Slend</a></Link></li>
                          <li className={styles["product-Generation"]}><Link href="/productsPage"><a>Infinite</a> </Link></li>
                          <li className={styles["product-Generation"]}><Link href="/productsPage"><a>Slend</a> </Link></li> */}
                        </ul>
                      </div>
                      <div className={styles["nav-Col"]}>
                        <ul className={styles["product-Gen-List"]}>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a href="">View All</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </li>


          <li className={styles["nav-item"]}>
            <Link href="/productsPage">
                <a className={styles["nav-Link"] + " " + styles["active"]}>Mats<i className={styles["fa"] + " " + styles["fa-angle-right"]} aria-hidden="true"></i></a>
            </Link>
            {/* <!-- New DropDown --> */}
            <div className={styles["items"] + " " + styles["container"]}>

              <div className={styles["row"] + " " + ["justify-content-center"]}>
                <div className={styles["link-blocks"] + " " + ["col-12"]}>
                  <div className={styles["products-Column"]}>
                    {/* <div className={styles["prodct-Title-Container"]}>
                      <Link href="/productsPage">
                      <a className={styles["product-Title"]}>Mat Device</a>
                      </Link>
                    </div> */}
                    <div className={styles["submenu-wrapper"]}>

                      <div className={styles["nav-Col"]}>
                        <ul className={styles["product-Gen-List"]}>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a>Keyboard Mats</a> 
                            </Link>  
                          </li>
                         
                          
                         </ul>
                      </div>
                      <div className={styles["nav-Col"]}>
                        <ul className={styles["product-Gen-List"]}>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a href="">Mouse Mats</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    
                      <div className={styles["nav-Col"]}>
                        <ul className={styles["product-Gen-List"]}>
                          <li className={styles["product-Generation"]}>
                            <Link href="/productsPage">
                              <a href="">View All</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </li>


 
          {/* <!-- About Us --> */}
          <li className={styles["nav-item"]}>
            <Link href="/aboutUs">
               <a className={styles["nav-Link"] + " " + styles["active"]}>About Us<i className={styles["fa"] + " " + styles["fa-angle-right"]} aria-hidden="true"></i> </a>
            </Link>
            
          </li>
        </ul>
      </nav>
    </div>
  </div>




</header>


{/* Side Cart */}
<div className={styles['cart-drawer']}> 
  <div className={styles['offcanvas-Cart'] + " " + ['offcanvas'] + " " + ['offcanvas-end']} tabIndex="-1" id={["offcanvasExample"]} aria-labelledby="offcanvasExampleLabel">

    <header className={['row'] + " " + ['offcanvas-header']}>
        <div className={['cart-Header'] + " " + styles['offcanvas-title'] + " " + ['col-10']}>
            Shopping  Bag <span className={styles['cart-Items']}>13 Items</span>
        </div>
    
        <button className={['col-2'] + " " + styles['close-Drawer'] + " " + styles['hamburger--spring'] + " " + styles['is-active']} type="button" data-bs-dismiss="offcanvas"
          aria-label="Close">
          <span className={styles['hamburger-box']}>
            <span className={styles['hamburger-inner']}></span>
          </span>
        </button>
    </header>



    <div className={['offcanvas-body'] + " " + styles['offcanvas-Body']}>
      <div className={['container']}>
        

        <div className={styles['cart-Product'] + " " + ['row']}>
          <div className={['col-4']}>
            <div className={styles['cart-Product--Image']}>
              <Image
                                  className={styles["cart-Product--Image"]}
                                  src={cartProductImage}
                                  alt="Products Title for image"
                                  objectFit="cover"
                                  placeholder="blur"
               />
            </div>
          </div>









          <div className={styles['cart-Product--Info'] + " " + ['col-8']}>

            <div className={['row']}>
              <div className={styles['cart-Product--Collection'] + " " + ['col']}>
                Vor-Tech
              </div>
            </div>
            <div className={['row']}>
              <div className={styles['cart-Product--Title'] + " " + ['col']}>
                Lava 2WR
              </div>
            </div>
            <div className={styles['product-Pricing']}>
            <div className={['row']}>
              <div className={styles['product-Pricing--Unit'] + " " + ['col-6']}>
                $50.00
              </div>
              <div className={['col-6']}>
              











              </div>
            </div>
            <div className={['row']}>
              <div className={styles['cart-Product--Quantity'] + " " + ['col']}>
                Quantity: 3
              </div>
            
            </div>
            <div className={['row']}>
              
              <div className={styles['cart-Product--Price'] + " " + ['col']}>
                + $75.00
              </div>
            </div>
            </div>

          
          </div>

        </div>

        <div className={styles['cart-Product'] + " " + ['row']}>
          <div className={['col-4']}>
            <div className={styles['cart-Product--Image']}>
              {/* <img src="assets/images/keyboard-images/product-images/keyboard-product.jpg" className="cart-Product--Image" alt="" loading="lazy" style="object-fit: cover;"> */}
              <Image
                                  className={styles["cart-Product--Image"]}
                                  src={cartProductImage}
                                  alt="Products Title for image"
                                  objectFit="cover"
                                  // priority={true}
                                  placeholder="blur"
                              />
            </div>
          </div>









          <div className={styles['cart-Product--Info'] + " " + ['col-8']}>

            <div className={['row']}>
              <div className={styles['cart-Product--Collection'] + " " + ['col']}>
                Vor-Tech
              </div>
            </div>
            <div className={['row']}>
              <div className={styles['cart-Product--Title'] + " " + ['col']}>
                Lava 2WR
              </div>
            </div>
            <div className={styles['product-Pricing']}>
            <div className={['row']}>
              <div className={styles['product-Pricing--Unit'] + " " + ['col-6']}>
                $50.00
              </div>
              <div className={['col-6']}>
              











              </div>
            </div>
            <div className={['row']}>
              <div className={styles['cart-Product--Quantity'] + " " + ['col']}>
                Quantity: 3
              </div>
            
            </div>
            <div className={['row']}>
              
              <div className={styles['cart-Product--Price'] + " " + ['col']}>
                + $75.00
              </div>
            </div>
            </div>

          
          </div>

        </div>


        <div className={styles['cart-Product'] + " " + ['row']}>
          <div className={['col-4']}>
            <div className={styles['cart-Product--Image']}>
              {/* <img src="assets/images/keyboard-images/product-images/keyboard-product.jpg" className="cart-Product--Image" alt="" loading="lazy" style="object-fit: cover;"> */}
              <Image
                                  className={styles["cart-Product--Image"]}
                                  src={cartProductImage}
                                  alt="Products Title for image"
                                  objectFit="cover"
                                  // priority={true}
                                  placeholder="blur"
                              />
            </div>
          </div>









          <div className={styles['cart-Product--Info'] + " " + ['col-8']}>

            <div className={['row']}>
              <div className={styles['cart-Product--Collection'] + " " + ['col']}>
                Vor-Tech
              </div>
            </div>
            <div className={['row']}>
              <div className={styles['cart-Product--Title'] + " " + ['col']}>
                Lava 2WR
              </div>
            </div>
            <div className={styles['product-Pricing']}>
            <div className={['row']}>
              <div className={styles['product-Pricing--Unit'] + " " + ['col-6']}>
                $50.00
              </div>
              <div className={['col-6']}>
              











              </div>
            </div>
            <div className={['row']}>
              <div className={styles['cart-Product--Quantity'] + " " + ['col']}>
                Quantity: 3
              </div>
            
            </div>
            <div className={['row']}>
              
              <div className={styles['cart-Product--Price'] + " " + ['col']}>
                + $75.00
              </div>
            </div>
            </div>

          
          </div>

        </div>


        <div className={styles['cart-Product'] + " " + ['row']}>
          <div className={['col-4']}>
            <div className={styles['cart-Product--Image']}>
              {/* <img src="assets/images/keyboard-images/product-images/keyboard-product.jpg" className="cart-Product--Image" alt="" loading="lazy" style="object-fit: cover;"> */}
              <Image
                                  className={styles["cart-Product--Image"]}
                                  src={cartProductImage}
                                  alt="Products Title for image"
                                  objectFit="cover"
                                  // priority={true}
                                  placeholder="blur"
                              />
            </div>
          </div>









          <div className={styles['cart-Product--Info'] + " " + ['col-8']}>

            <div className={['row']}>
              <div className={styles['cart-Product--Collection'] + " " + ['col']}>
                Vor-Tech
              </div>
            </div>
            <div className={['row']}>
              <div className={styles['cart-Product--Title'] + " " + ['col']}>
                Lava 2WR
              </div>
            </div>
            <div className={styles['product-Pricing']}>
            <div className={['row']}>
              <div className={styles['product-Pricing--Unit'] + " " + ['col-6']}>
                $50.00
              </div>
              <div className={['col-6']}>
              











              </div>
            </div>
            <div className={['row']}>
              <div className={styles['cart-Product--Quantity'] + " " + ['col']}>
                Quantity: 3
              </div>
            
            </div>
            <div className={['row']}>
              
              <div className={styles['cart-Product--Price'] + " " + ['col']}>
                + $75.00
              </div>
            </div>
            </div>

          
          </div>

        </div>




        <div className={styles['cart-Product'] + " " + ['row']}>
          <div className={['col-4']}>
            <div className={styles['cart-Product--Image']}>
              {/* <img src="assets/images/keyboard-images/product-images/keyboard-product.jpg" className="cart-Product--Image" alt="" loading="lazy" style="object-fit: cover;"> */}
              <Image
                                  className={styles["cart-Product--Image"]}
                                  src={cartProductImage}
                                  alt="Products Title for image"
                                  objectFit="cover"
                                  // priority={true}
                                  placeholder="blur"
                              />
            </div>
          </div>









          <div className={styles['cart-Product--Info'] + " " + ['col-8']}>

            <div className={['row']}>
              <div className={styles['cart-Product--Collection'] + " " + ['col']}>
                Vor-Tech
              </div>
            </div>
            <div className={['row']}>
              <div className={styles['cart-Product--Title'] + " " + ['col']}>
                Lava 2WR
              </div>
            </div>
            <div className={styles['product-Pricing']}>
            <div className={['row']}>
              <div className={styles['product-Pricing--Unit'] + " " + ['col-6']}>
                $50.00
              </div>
              <div className={['col-6']}>
              











              </div>
            </div>
            <div className={['row']}>
              <div className={styles['cart-Product--Quantity'] + " " + ['col']}>
                Quantity: 3
              </div>
            
            </div>
            <div className={['row']}>
              
              <div className={styles['cart-Product--Price'] + " " + ['col']}>
                + $75.00
              </div>
            </div>
            </div>

          
          </div>

        </div>






        <div className={styles['cart-Product'] + " " + ['row']}>
          <div className={['col-4']}>
            <div className={styles['cart-Product--Image']}>
              {/* <img src="assets/images/keyboard-images/product-images/keyboard-product.jpg" className="cart-Product--Image" alt="" loading="lazy" style="object-fit: cover;"> */}
              <Image
                                  className={styles["cart-Product--Image"]}
                                  src={cartProductImage}
                                  alt="Products Title for image"
                                  objectFit="cover"
                                  // priority={true}
                                  placeholder="blur"
                              />
            </div>
          </div>









          <div className={styles['cart-Product--Info'] + " " + ['col-8']}>

            <div className={['row']}>
              <div className={styles['cart-Product--Collection'] + " " + ['col']}>
                Vor-Tech
              </div>
            </div>
            <div className={['row']}>
              <div className={styles['cart-Product--Title'] + " " + ['col']}>
                Lava 2WR
              </div>
            </div>
            <div className={styles['product-Pricing']}>
            <div className={['row']}>
              <div className={styles['product-Pricing--Unit'] + " " + ['col-6']}>
                $50.00
              </div>
              <div className={['col-6']}>
              











              </div>
            </div>
            <div className={['row']}>
              <div className={styles['cart-Product--Quantity'] + " " + ['col']}>
                Quantity: 3
              </div>
            
            </div>
            <div className={['row']}>
              
              <div className={styles['cart-Product--Price'] + " " + ['col']}>
                + $75.00
              </div>
            </div>
            </div>

          
          </div>

        </div>


      </div>
    </div>








    <footer className={styles['cart-Footer']}>
      
      <div className={styles['cart-Quantity'] + " " + ['row']}>
        
      </div>
      <div className={styles['cart-Subtotal'] + " " + ['row']}>
        <div className={styles['cart-Subtotal--Text'] + " " + ['col']}>
        
            SUBTOTAL:
          
        </div>
        <div className={styles['cart-Subtotal--Amount'] + " " + ['col']}>
          $300.00
        </div>
      </div>
      
      <div className={styles['checkout-Button']}>
        
        <div className={styles['checkout-Btn']}>
          <div className={['centered--button']}>
            <div className={['textbox-button']}>
              <button aria-label="Checkout" className={styles['add-To-Cart--Btn']}>
                <a>Checkout</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</div>


{/* Center Pop Up for mobile sign up and sign in */}

{/* 
<div className={styles['center-Popup'] + " " + styles['popup-Hidden']}>
  <div className={['container-fluid '] + " " + styles['popup-Square']}>
    <div className={['row']}>
      <div className={styles['main-Column']}>
            <div className={['row'] + " " + styles['top-Row']}>
              <div className={['col-3']}> </div>
              <div className={['col-6'] + " " + styles['logo']}>
                  <Image
                  className={styles["popup-Logo"]}
                  src={siteLogo}
                  alt="The Keyboard Crew Logo"
                  width={75} 
                  height={28} 
                  placeholder="blur" 
                  />
              </div>
              <div className={['col-3']}>
              <button className={styles['hamburger'] + " " + styles['hamburger--spring'] + " " + styles['is-active']} id={styles["close-Login--Popup"]} type="button">
                <span className={styles['hamburger-box']}>
                  <span className={styles['hamburger-inner']}></span>
                </span>
              </button>
            </div>
            </div>
  
            <div className={['row'] + " " + styles['login-Form--Row'] + " " + styles['row-Style']}>
              <form className={styles['form']}>
                <div className={['mb-3']}>
                  <label htmlFor="exampleInputEmail1" className={['form-label']}>Email address</label>
                  <input type="email" className={['form-control'] + " " + styles['form-control--Style']} id={styles['exampleInputEmail1']} aria-describedby="emailHelp"/>
                </div>
                <div className={['mb-3']}>
                  <label htmlFor="exampleInputPassword1" className={['form-label']} >Password</label>
                  <input type="password" className={['form-control'] + " " + styles['form-control--Style']} id={styles['exampleInputPassword1']}/>
                </div>

                <button type="submit" className={['btn'] + " " + styles['btn-primary']}>SIGN IN</button>
              </form>
            </div>

            <div className={['row'] + " " + styles['forgot-Password--Row']}>
              <div className={['col-12']}>
                  <div className={styles['reset-Password--Link']}><a href="">Forgot Password</a></div>
              </div>
            </div>

            <div className={['row'] + " " + styles['new-Member--Row']}>
              <div className={['col']}>
                  <div className={styles['footer-Text']}>Not a member?</div>
              </div>
              <div className={['col']}>
                <div className={styles['create-Account']}><a href="">Join For Free</a></div>
            </div>
            </div>
      </div>
    </div>
  </div>
</div> */}


{/* Page Overlay */}
{/* <div className={styles['overlayClosed'] + " " + styles['overlayNowOpened']} className={styles['overlayNowOpened']}></div> */}




















{/* Search Results Pop Up  */}


<div className={styles['search-Results']}>


  <div className={styles['offcanvas-1'] + " " + ['offcanvas'] + " " + ['offcanvas-top']} tabIndex="-1" id={['offcanvasTop']} aria-labelledby="offcanvasTopLabel">
    <div className={styles['search-Results-Overlay']}>
      <div className={['search-Results-Container'] + " " + ['container-fluid']}>

        <div className={styles['top-row'] + " " + styles['row']}>
          <header>
            <div className={styles['top-row']}>
              <div className={styles['grid-container']}>
                <div className={styles['grid-item'] + " " + styles['item-1']}>
                </div>



                <div className={styles['grid-item'] + " " + styles['item-2']}>
                  <div className={styles['desktop-logo']}>
                    <a href="E-Commerce-Home-Page.html">


                      <Image
                        className={styles["popup-Logo"]}
                        src={siteLogo}
                        // priority={true}
                        alt="The Keyboard Crew Logo"
                        width={75} 
                        height={28} 
                        placeholder="blur" 
                      />
                    </a>
                  </div>
                </div>




                <div className={styles['grid-item'] + " " + styles['item-3']}>
                  <div className={styles['close-Search-Btn']}>
                    <button className={styles['close-Search-Canvas--btn'] + " " + styles['hamburger--spring'] + " " + styles['is-active']} id={styles['close-Search']} type="button"
                      data-bs-dismiss="offcanvas" aria-label="Close">
                      <span className={styles['hamburger-box']}>
                        <span className={styles['hamburger-inner']}></span>
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </header>
        </div>





   

        <div className={styles['input-Row'] + " " + ['row']}>
          <div className={['col-12']}>

            <form action="">
              <div className={styles['input-box']}>
                <input type="search" name="Search Store" id={styles['search-Results-Input']} placeholder="Search Store..."/>
              </div>
            </form>

          </div>
        </div>






        <div className={styles['popular-Search--Links'] + " " + ['row'] + " " + ['justify-content-md-center']}>
          <div className={styles['popular-Searches'] + " " + ['col-12']}>
            
            <div className={styles['popular-Searches--Text']}>
              <label htmlFor="Popular Searches">
                Popular Searches:
              </label>
            </div>
              <ul className={styles['popular-Links']}>
                <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Mechanical Keyboards</a></li>
                <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Keyboards</a></li>
                <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Mouses</a></li>
                <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Vor-Tech</a></li>
                <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Mouses</a></li>
                <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Vor-Tech</a></li>
              </ul>
          </div>

        </div>








          <div className={styles['search-Query--Results'] + " " + ['container-fluid']} >
    {/* Container */}
            <div className={styles['product-Suggestions'] + " " + ['container']}>

  {/* Row */}
              <div className={styles['product-Suggestions--Row'] + " " + ['row'] + " " + ['justify-content-md-center']}>
                <div className={['col-10']}>
                  
                  <div className={['row'] + " " + ['justify-content-md-center']}>
                    <div className={styles['product-Suggestions--Title'] + " " + ['col']}>Product Suggestion</div>
                  </div>

                  <div className={['row '] + " " + ['row-cols-2'] + " " + ['row-cols-sm-2'] + " " + ['row-cols-md-4']}>







{/* COL */}
                    <div className={styles['product'] + " " + ['col']}>
                      <div className={styles['produt-container']}>
  {/* a */}
                        <a href="" className={styles['product-block']}>
                          <div className={styles['grid-item']}>
                            <div className={styles['product-img']}>
                            
                              <Image
                                  className={styles['search-Query--Image']}
                                  src={cartProductImage}
                                  alt="Products Title for image"
                                  objectFit="cover"
                                  placeholder="blur"
                              />
                                    
                            
                            </div>

                            <div className={styles['item--description']}>
                              <div className={styles['collection--title']}>Vor-Tech</div>
                              <div className={styles['product--item-title']}>
                                <div className={styles['prod--title']}>Lava 2WR</div>
                              </div>
                              <div className={styles['product--item-price']}>$280.00</div>
                            </div>

                          </div>
                        </a>
                      </div>
                    </div>




                    <div className={styles['product'] + " " + ['col']}>
                      <div className={styles['produt-container']}>
                        <a href="" className={styles['product-block']}>
                          <div className={styles['grid-item']}>
                            <div className={styles['product-img']}>

                              <Image
                                  className={styles['search-Query--Image']}
                                  src={cartProductImage}
                                  alt="Products Title for image"
                                  objectFit="cover"
                                  placeholder="blur"
                              />
                           
                            </div>

                            <div className={styles['item--description']}>
                              <div className={styles['collection--title']}>Vor-Tech</div>
                              <div className={styles['product--item-title']}>
                                <div className={styles['prod--title']}>Lava 2WR</div>
                              </div>
                              <div className={styles['product--item-price']}>$280.00</div>
                            </div>

                          </div>
                        </a>
                      </div>
                    </div>





                    <div className={styles['product'] + " " + ['col']}>
                      <div className={styles['produt-container']}>
                        <a href="" className={styles['product-block']}>
                          <div className={styles['grid-item']}>
                            <div className={styles['product-img']}>


                              <Image
                                  className={styles['search-Query--Image']}
                                  src={cartProductImage}
                                  alt="Products Title for image"
                                  objectFit="cover"
                                  placeholder="blur"
                              />
                            
                            
                            </div>

                            <div className={styles['item--description']}>
                              <div className={styles['collection--title']}>Vor-Tech</div>
                              <div className={styles['product--item-title']}>
                                <div className={styles['prod--title']}>Lava 2WR</div>
                              </div>
                              <div className={styles['product--item-price']}>$280.00</div>
                            </div>

                          </div>
                        </a>
                      </div>
                    </div>





                    <div className={styles['product'] + " " + ['col']}>
                      <div className={styles['produt-container']}>
                        <a href="" className={styles['product-block']}>
                          <div className={styles['grid-item']}>
                            <div className={styles['product-img']}>
                              

                              <Image
                                  className={styles['search-Query--Image']}
                                  src={cartProductImage}
                                  alt="Products Title for image"
                                  objectFit="cover"
                                  placeholder="blur"
                              />
                            
                            
                            </div>

                            <div className={styles['item--description']}>
                              <div className={styles['collection--title']}>Vor-Tech</div>
                              <div className={styles['product--item-title']}>
                                <div className={styles['prod--title']}>Lava 2WR</div>
                              </div>
                              <div className={styles['product--item-price']}>$280.00</div>
                            </div>

                          </div>
                        </a>
                      </div>
                    </div>





                  </div>


                </div>
              </div>
            </div> 
            
            <div className={styles['product-Suggestions'] + " " + ['container']}>
              <div className={styles['product-Suggestions--Row'] + " " + ['row'] + " " + ['justify-content-md-center']}>
                <div className={['col-10']}>
                  
                  <div className={['row'] + " " + ['justify-content-md-center']}>
                    <div className={styles['product-Suggestions--Title'] + " " + ['col']}>Collections</div>
                  </div>

                  <div className={['row']}>
                    <ul className={styles['Search-Results--Links']}>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Mechanical Keyboards</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Keyboards</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Mouses</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Vor-Tech</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Mouses</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Vor-Tech</a></li>
                    </ul>

                  </div>

                </div>
              </div>
            </div> 
            
            <div className={styles['product-Suggestions'] + " " + ['container']}>
              <div className={styles['product-Suggestions--Row'] + " " + ['row'] + " " + ['justify-content-md-center']}>
                <div className={['col-10']}>
                  
                  <div className={['row'] + " " + ['justify-content-md-center']}>
                    <div className={styles['product-Suggestions--Title'] + " " + ['col']}>Collections</div>
                  </div>

                  <div className={['row']}>
                    <ul className={styles['Search-Results--Links']}>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Mechanical Keyboards</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Keyboards</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Mouses</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Vor-Tech</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Mouses</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Vor-Tech</a></li>
                    </ul>

                  </div>

                </div>
              </div>
            </div> 




            <div className={styles['product-Suggestions'] + " " + ['container']}>
              <div className={styles['product-Suggestions--Row'] + " " + ['row'] + " " + ['justify-content-md-center']}>
                <div className={['col-10']}>
                  
                  <div className={['row'] + " " + ['justify-content-md-center']}>
                    <div className={styles['product-Suggestions--Title'] + " " + ['col']}>Collections</div>
                  </div>

                  <div className={['row']}>
                    <ul className={styles['Search-Results--Links']}>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Mechanical Keyboards</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Keyboards</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Mouses</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Vor-Tech</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Mouses</a></li>
                      <li className={styles['popular-Link']}><a className={styles['popular-Anchor--Links']} href="">Vor-Tech</a></li>
                    </ul>

                  </div>

                </div>
              </div>
            </div> 
     
     
        </div> 






      </div>
    </div>
  </div>
</div>








{/* Mobile Menu */}











</div>


)

export default Nav