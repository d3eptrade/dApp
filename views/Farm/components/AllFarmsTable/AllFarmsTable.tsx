import { farmsSelectedNetworkAtom, farmsSelectedTokenAtom } from '@atoms'
import NetworkLabel from '@components/NetworkLabel'

import { allFarms } from '@config/constants'
import { useAtom } from 'jotai'

import React from 'react'

const AllFarmsTable = () => {
  const [selectedToken] = useAtom(farmsSelectedTokenAtom)
  const [selectedNetwork] = useAtom(farmsSelectedNetworkAtom)

  const filteredByTokenFarms = allFarms.filter((farm) => {
    if (!selectedToken) return true

    return farm.name.title === selectedToken
  })

  const filteredByNetworkFarms = filteredByTokenFarms.filter((farm) => {
    if (!selectedNetwork) return true

    return farm.network === selectedNetwork
  })

  return (
    <>
      {/** Table --Start-- */}
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Network</th>
              <th>Liquidity</th>
              <th>APY</th>
            </tr>
          </thead>

          <tbody>
            {filteredByNetworkFarms.map((farm, i) => {
              return (
                <tr key={i}>
                  <td>
                    <div>
                      <p>
                        {farm.name.title}
                      </p>
                    </div>
                  </td>
                  <td>
                    <NetworkLabel network={farm.network} size='large' />
                  </td>
                  <td>
                    {farm.liquidity}
                  </td>
                  <td>
                    {farm.apy}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {/** Table --End-- */}
    </>
  )
}

export default AllFarmsTable
