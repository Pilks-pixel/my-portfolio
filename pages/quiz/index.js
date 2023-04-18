import React from 'react'
import Head from "next/head";
import utils from "../../styles/Utils.module.css"
import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function quiz() {
  return (
    <>
        <Head>
				<title>Peter Pilkington | web developer portfolio</title>
				<meta
					name='description'
					content='peter pilkington junior software developer portfolio'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
		</Head>

        <div className={utils.wrapper} >
        <header className={utils.description}>
          <h2 className={utils.description__name}>Peter Pilkington</h2>
          <h1 className={utils.description__job}>full Stack developer</h1>
        </header>

        <main className={utils.main}>
          

        </main>

        <footer className={utils.contact}>
          <h2>contact</h2>
          <div className={utils.contact__links}>
            <a href='https://github.com/Pilks-pixel' target='_blank'>
            <FaGithub size={32} />
            </a>
            <a
              href='https://www.linkedin.com/in/peter-pilkington-322262107/'
              target='_blank'
            >
            <FaLinkedin size={32} color="#0077b5" />
            </a>
          </div>
        </footer>
      </div>


    </>
  )
}

export default quiz