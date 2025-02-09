import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="mx-auto w-[70vw] py-8 pt-32">
      <div className="bg-bme-lsecondary text-bme-black dark:text-bme-white dark:bg-bme-dsecondary relative grid overflow-clip rounded-2xl shadow-xl">
        <div className="grid justify-items-center h-fit w-[70vw] grid-cols-4 p-0 lg:w-[60vw] lg:grid-flow-col lg:p-8">
          <div className="grid h-fit w-[70vw] grid-cols-1 gap-2 p-0 lg:w-[10vw]  ">
            <img src="./images/logo/secondarylogodark.svg" />
            <p>info@solarboatteam.hu</p>
            <p>+36 70 608 7004</p>
          </div>
          <div className="grid gap-2">
            <Link className='text font-bold' href={""}>Rólunk</Link>
            <Link href={""}>Csapattagok</Link>
            <Link href={""}>Rólunk+</Link>
            <Link href={""}>Eredményeink</Link>
          </div>
          <div className="grid gap-2">
            <Link className='text font-bold' href={""}>Hírek</Link>
            <Link href={""}>Sajtó</Link>
            <Link href={""}>Blog</Link>
          </div>
          <div className="grid gap-2">
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