import NetworkLabel from '@components/NetworkLabel'
import { topFarms } from '@config/constants'
import { useRouter } from 'next/router'
import React from 'react'

const TopFarms = () => {
  const router = useRouter()
  return (
    <div>
      {topFarms.map(
        ({ logo, apy, farmName, liquidity, logoSml, lpt, network }, i) => {
          return (
            <div key={i}>
              {/** divider --Start-- */}
              <div></div>
              {/** divider --End-- */}

              <div>
                {/** Top --Start-- */}
                <div>
                  <div>
                    {/** Top left --Start-- */}
                    <div>
                      {logo}
                      <div>{logoSml}</div>
                    </div>
                    {/** Top left --End-- */}

                    {/** Bottom left --Start-- */}
                    <div>
                      <p>Farm</p>
                      <h3>{farmName}</h3>
                    </div>
                    {/** Bottom left --End-- */}
                  </div>

                  {/** Top Right --Start-- */}
                  <div>
                    <div>
                      <NetworkLabel network={network} />
                    </div>
                    <div>
                      <p>APY</p>
                      <h3>{apy}</h3>
                    </div>
                  </div>
                  {/** Top Right --End-- */}
                </div>
                {/** Top --End-- */}

                {/** Bottom Start --Start-- */}
                <div>
                  <div>
                    <p>Available</p>
                    <p>{lpt}</p>
                  </div>
                  <div>
                    <p>Liquidity</p>
                    <p>{liquidity}</p>
                  </div>
                </div>
                {/** Bottom Start --End-- */}
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}

export default TopFarms
