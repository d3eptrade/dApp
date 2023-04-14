import NetworkLabel from '@components/NetworkLabel'
import ETH from '@components/Svgs/ETH'
import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import WalletInfoRow from './components/WalletInfoRow'
import { cx } from '@utils'
import { useRouter } from 'next/router'
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'
import { MyConnectButton } from '@views/Convert/MyConnectButton'

function AddPool() {
  const router = useRouter()
  const [isStake, setIsStake] = useState(true)
  const { isConnected } = useAccount()
  const { chain } = useNetwork()
  const [button, setButton] = useState('Connect Wallet')
  const { switchNetwork, error, isLoading } = useSwitchNetwork()
  const [notFulfilled, setFulfill] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value)

  useEffect(() => {
    if (isStake) setButton('Stake')
    if (isConnected == true) {
      // setButton('Stake')
      if (chain?.id != 1) {
        switchNetwork?.(1)
      }
      // if (error && isLoading) {
      //   setButton('Wrong network')
      // }
    }
    if (!Number(inputRef.current?.value)) setFulfill(true)
    else setFulfill(false)
  }, [isConnected, inputRef.current?.value, isStake])
  return (
    <div className='md:max-w-[400px] w-full mx-auto mb-[100px] container'>
      <ul className='flex items-center gap-1 text-[#c2c2c2] font-roc-grotesk font-medium leading-6 text-base my-5'>
        <li>
          <button
            className='hover:text-white'
            onClick={() => {
              router.push('/farm')
            }}
          >
            Farm
          </button>
        </li>
        <li>
          <AiOutlineRight size={10} />
        </li>
        <li>
          <button className='text-white'>elETH</button>
        </li>
      </ul>

      <div className='w-full bg-[#26262661] rounded-2xl overflow-hidden'>
        <header className='flex items-center justify-between p-6'>
          <h4 className='font-roc-grotesk font-semibold text-white leading-6 text-[20px]'>
            Pool elETH
          </h4>
          <NetworkLabel network='ethereum' size='large' />
        </header>
        <main className='p-6 !pt-0'>
          <div className='flex items-center gap-5'>
            <button
              className={cx(
                'font-roc-grotesk font-semibold  leading-6 text-[18px]',
                isStake ? 'text-white' : 'text-[#ffffff87]'
              )}
              onClick={() => {
                setIsStake(true)
                setButton('Stake')
              }}
            >
              Stake
            </button>
            <button
              className={cx(
                'font-roc-grotesk font-semibold  leading-6 text-[18px]',
                isStake ? 'text-[#ffffff87]' : 'text-white'
              )}
              onClick={() => {
                setIsStake(false)
                setButton('Unstake')
              }}
            >
              Unstake
            </button>
          </div>

          <div className='pt-5'>
            <div className='flex flex-col gap-0.5'>
              <label
                htmlFor='total_amount'
                className='font-roboto text-sm text-[#ffffff87] leading-6'
              >
                Total Amount
              </label>
              <div className='relative'>
                <div className='w-6 absolute top-1/2 -translate-y-1/2 left-3'>
                  <img src='/img/eleth.png' alt='Logo' width={'32px'} />
                </div>
                <input
                  type='number'
                  id='total_amount'
                  className='bg-[#232323a6] w-full p-[13px] border outline-none border-[#CCCCCC]/20 rounded-xl placeholder:text-[#CCCCCC]/50 pl-[42px] pr-[78px]'
                  placeholder='0'
                  ref={inputRef}
                  value={value}
                  onChange={handleInputChange}
                  onKeyDown={(event) => {
                    const regex = /^\d*(\.\d{0,6})?$/
                    const allowedKeys = [
                      'Delete',
                      'Backspace',
                      'ArrowLeft',
                      'ArrowRight',
                    ]
                    const hasDecimalPoint =
                      event.target.value.indexOf('.') !== -1
                    if (
                      !regex.test(event.key) ||
                      (event.key === '.' && hasDecimalPoint)
                    ) {
                      if (!allowedKeys.includes(event.key)) {
                        event.preventDefault()
                      }
                    }
                  }}
                />
                <button
                  type='button'
                  className='outline-none border  text-white px-3 py-1 hover: hover:text-white text-sm rounded-md absolute top-1/2 -translate-y-1/2 right-5'
                >
                  MAX
                </button>
              </div>
            </div>
          </div>

          <div className='mt-[100px]'>
            <WalletInfoRow text='Pending rewards' />
            <WalletInfoRow text='elETH Staked' />
            <WalletInfoRow text='Share of Pool' />
            <WalletInfoRow text='APY' number={'35.83%'} />
            <WalletInfoRow text='Pool Liquidity' number={'52,186,989.70'} />
          </div>
          {isConnected ? (
            <button
              disabled={notFulfilled}
              className='connectButton bg-primary mt-6 duration-200 font-poppins text-white py-4 w-full rounded-xl flex justify-center items-center gap-2'
            >
              {button}
            </button>
          ) : (
            <MyConnectButton />
          )}
        </main>
      </div>
    </div>
  )
}

export default AddPool
