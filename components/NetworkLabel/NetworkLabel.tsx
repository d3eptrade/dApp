import { networks } from '@config/constants'
import { Netoworks } from '@config/types'
import { cx } from '@utils'
import React, { useMemo, useState } from 'react'

const NetworkLabel = ({
  network,
  size,
  bgColor,
}: {
  network: Netoworks
  size?: 'small' | 'large'
  bgColor: 'purple'
}) => {
  const [background, setBackground] = useState({ background: '#ffffff' })
  const isSmall = size === 'large' ? false : true
  const findNetwork = useMemo(
    () => networks.find((n) => n.key === network),
    [network]
  )
  if (!findNetwork) return <div>N</div>
  return (
    <div
      style={{
        background: findNetwork?.bgColor,
      }}
      className={cx(
        'rounded-[0.25rem] font-poppins font-normal inline-flex items-center gap-[3px]',
        isSmall
          ? 'text-[12px] leading-[12px] py-[5px] px-4 bg-primary text-white'
          : 'text-[14px] leading-[19px] px-5 py-[7px] bg-primary text-white'
      )}
      //style={background}
    >
      {/* <span className={cx("shrink-0", isSmall ? "w-[14px]" : "w-4")}>
        {findNetwork?.icon}
      </span> */}
      {findNetwork?.name}
    </div>
  )
}

export default NetworkLabel
