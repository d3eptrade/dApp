import { farmTabs } from '@config/constants'
import { cx } from '@utils'
import React, { useState } from 'react'

const FarmTab = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const activeTabBody = farmTabs[activeTabIndex]?.component
  return (
    <section>
      <div>
        <div>
          {farmTabs.map((tab, i) => {
            const isActive = i === activeTabIndex
            return (
              <button
                key={i}>
                {tab.title}
              </button>
            )
          })}
        </div>

        {activeTabBody}
      </div>
    </section>
  )
}

export default FarmTab
