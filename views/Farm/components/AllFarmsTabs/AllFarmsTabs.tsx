import React, { useState } from 'react'
import { cx } from '@utils'
import Select from '@components/Select'

import { allFarmsTabs, chainsOptions, tokensOptions } from '@config/constants'

const AllFarmsTabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const activeTabBody = allFarmsTabs[activeTabIndex].component

  return (
    <section>
      <div>
        {/** Tabs And Select Dropdown --Start-- */}
        <div>
          <div>
            {allFarmsTabs.map((tab, i) => {
              const isActive = i === activeTabIndex
              return (
                <button
                  key={i}>
                  {tab.title}
                </button>
              )
            })}
          </div>

          {/* <div className='flex items-center flex-wrap gap-4 md:gap-6'
          style={{background:''}}>
            <Select
              label='Network'
              onChange={(opt) => {
                setActiveChain(opt)
                setSelectedNetwork(opt.value === 'all' ? null : opt.value)
              }}
              options={chainsOptions}
              value={activeChain}
            />
          </div> */}
        </div>
        {/** Tabs And Select Dropdown --End-- */}

        {activeTabBody}
      </div>
    </section>
  )
}

export default AllFarmsTabs
