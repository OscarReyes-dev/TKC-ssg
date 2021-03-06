import '../styles/reset.css'
import Head from "next/head";

import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
return (
          <>
                <Head>
                {/* <meta charset="UTF-8"/> */}
                <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <title>⌨️ The Keyboard Crew</title>
                  {/* <!-- FontAwsome --> */}
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer" />
                  {/* // Bootstrap 5.0.0 */}
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"/>
                  {/* // Bootstrap 5.0.2 */}
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
                  {/* //Bootstrap Icons */}
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>

                </Head>




                  {/* <!-- BOOTSTRAP 5 --> */}
                  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                  crossOrigin="anonymous"></Script>
                  {/* <!-- JQUERY --> */}
                  <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>



            <Component {...pageProps} />


          </>
        );
        }
export default MyApp;