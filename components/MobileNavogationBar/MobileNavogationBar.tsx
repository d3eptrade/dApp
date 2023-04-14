import { headerNavigationItems } from '@config/constants'
import { cx } from '@utils'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
import React from 'react'

const MobileNavogationBar = () => {
  // const router = useRouter()
  return (
    <div
      className='sticky bottom-0 left-0 w-full z-50 lg:hidden'
      // style={{ boxShadow: '10px 0px 10px rgba(0, 0, 0, 0.25)' }}
    >
      <nav
        // className='grid'
        // style={{
        //   gridTemplateColumns: `repeat(${headerNavigationItems.length}, 1fr)`,
        // }}
      >
        {headerNavigationItems.map((item, i) => {
          // const isActive = router.pathname === item.url
          return (
            // <Link href={item.url} key={i}>
              <a
                // className='text-center text-sm h-[55px] flex flex-col justify-center items-center gap-0.5'
                // style={{ fontWeight: 'bold' }}
              key={i}
              >
                {/* <span>{item.icon}</span> */}
                <span
                  className={cx(
                    // isActive ? 'h-5' : 'h-0 overflow-hidden',
                    'duration-300'
                  )}
                >
                  {item.text}
                </span>
              </a>
            // </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default MobileNavogationBar
