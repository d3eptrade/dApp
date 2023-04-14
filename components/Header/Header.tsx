import { useHeaderHeight } from '@atoms'
import Logo from '@components/Svgs/Logo'
import { headerNavigationItems } from '@config/constants'
import { cx } from '@utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import '@rainbow-me/rainbowkit/styles.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Header = () => {
  const router = useRouter()
  const [, setHeaderHeight] = useHeaderHeight()
  const headerRef = useRef<HTMLDivElement>(null!)

  return (
    <header>
      <div>
        <div>
          <a>Enlight Finance</a>
        </div>

        <nav>
          <ul>
            {headerNavigationItems.map(({ text, url }, i) => {
              return (
                <li key={i}>
                  <a>{text}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div>
          <button>Connect Wallet</button>
        </div>
      </div>
    </header>
  )
}

export default Header
