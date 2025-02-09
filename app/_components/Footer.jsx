import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="mx-auto w-[70vw] py-8 pt-32">
      <div className="bg-bme-lsecondary text-bme-black dark:text-bme-white dark:bg-bme-dsecondary relative grid overflow-clip rounded-2xl shadow-xl">
        <div className="from-bme-orange/30 lg:from-bme-orange/60 absolute top-3/2 left-1/2 z-5 h-screen w-[3000px] -translate-x-1/2 -translate-y-full bg-radial to-transparent to-60% lg:-translate-y-1/2">
          <div className="grid">
          <Link href={'/'} scroll>
              <img src="./images/logo/secondarylogodark.svg" className="mx-auto block h-18 lg:mx-0 dark:hidden" />
              <img src="./images/logo/secondarylogowhite.svg" className="mx-auto hidden h-18 lg:mx-0 dark:block" />
            </Link>
            <p>info@solarboatteam.hu</p>
            <p>+36 70 608 7004</p>
          </div>
          <div className="grid">
            <Link className='text font-bold' href={""}>Rólunk</Link>
            <Link href={""}>Csapattagok</Link>
            <Link href={""}>Rólunk+</Link>
            <Link href={""}>Eredményeink</Link>
          </div>
          <div className="grid">
            <Link className='text font-bold' href={""}>Hírek</Link>
            <Link href={""}>Sajtó</Link>
            <Link href={""}>Blog</Link>
          </div>
          <div className="grid">
            <Link className='text font-bold' href={""}>Egyéb</Link>
            <Link href={""}>Galéria</Link>
            <Link href={""}>Szponzorok</Link>
            <Link href={""}>Elérhetőségek</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer