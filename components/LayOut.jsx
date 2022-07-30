import React from 'react';
import Head from "next/head";
import Footer from './Footer';
import NavBar from './NavBar';

function LayOut({children}) {
  return (
     <div>
         <Head>
        <title>Decrypters</title>
      </Head>
    
    <NavBar/>

     {children}

    <Footer/>

    </div>
  )
}

export default LayOut
