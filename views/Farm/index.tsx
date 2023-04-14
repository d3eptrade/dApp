import { useHeaderHeight } from '@atoms'
import React, { useEffect, useState } from 'react'
import AllFarmsTabs from './components/AllFarmsTabs'
import FarmTab from './components/FarmTab'
import { useAccount, useNetwork, useConnect } from 'wagmi'

const Farm = () => {
  return (
    <div>
      {/** Top section --Start-- */}
      <section>
        <div>
          <h1>
            Top Farms
          </h1>
        </div>
      </section>
      {/** Top section --End-- */}

      <FarmTab />

      <AllFarmsTabs />
    </div>
  )
}

export default Farm
