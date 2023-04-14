import AirbitrumChain from '@components/Svgs/AirbitrumChain'
import Arbitrum from '@components/Svgs/Arbitrum'
import AvalancheChain from '@components/Svgs/AvalancheChain'
import BNB from '@components/Svgs/BNB'
import BUSD from '@components/Svgs/BUSD'
import ETH from '@components/Svgs/ETH'
import Ethereum from '@components/Svgs/Ethereum'
import FantomChain from '@components/Svgs/FantomChain'
import FantomCircular from '@components/Svgs/FantomCircular'
import Matic from '@components/Svgs/Matic'
import OP from '@components/Svgs/OP'
import Optimism from '@components/Svgs/Optimism'
import OptimismChain from '@components/Svgs/OptimismChain'
import SmlLogo from '@components/Svgs/SmlLogo'
import USDC from '@components/Svgs/USDC'
import USDT from '@components/Svgs/USDT'
import AllFarmsTable from '@views/Farm/components/AllFarmsTable'
import TabEmptyBoxRow from '@views/Farm/components/TabEmptyBoxRow'
import { BiBarChartSquare, BiTransfer, BiHome } from 'react-icons/bi'
import { MdWaves } from 'react-icons/md'
import walletIcon from '@components/Svgs/walletIcon'

import TopFarms from '@views/Farm/components/TopFarms'
import StakePage from '@views/veELT/components/StakePage'
import YourFarmsTable from '@views/Farm/components/YourFarmsTable'

import {
  AllFarm,
  AllPools,
  Farm,
  FarmTab,
  FooterLinks,
  HeaderNavigationItems,
  Network,
  RoadmapBlockProps,
  SelectOption,
  TransfersTableType,
  Stake,
} from './types'
import AllPoolsTable from '@views/veELT/components/AllPoolsTable'
import YourPoolsTable from '@views/veELT/components/YourPoolsTable'

export const farmTabs: FarmTab[] = [
  {
    title: 'Top Farms',
    component: <TopFarms />,
  },
]

export const stakePageTabs: FarmTab[] = [
  {
    title: 'Available',
    component: <TabEmptyBoxRow />,
  },
  {
    title: 'Your Stakes',
    component: <TabEmptyBoxRow />,
  },
]

export const allPoolsTabs: FarmTab[] = [
  {
    title: 'All Pools',
    component: <AllPoolsTable />,
  },
  {
    title: 'Your Pools',
    component: <YourPoolsTable />,
  },
]

export const stakes: Stake[] = [
  {
    logo: <img src='/img/ELT.png' alt='Logo' width={'30px'} />,
    logoSml: <ETH />,
    network: 'ethereum',
    lockPeriod: '7/30/90',
    apy: '36.72%',
    lpt: '0.00',
    liquidity: '$10.1M',
  },
  {
    logo: <img src='/img/ELT.png' alt='Logo' width={'30px'} />,
    logoSml: <Arbitrum />,
    network: 'arbitrum',
    lockPeriod: '7/30/90',
    apy: '36.72%',
    lpt: '0.00',
    liquidity: '$10.1M',
  },
  {
    logo: <img src='/img/ELT.png' alt='Logo' width={'30px'} />,
    logoSml: <OP />,
    network: 'optimism',
    lockPeriod: '7/30/90',
    apy: '36.72%',
    lpt: '0.00',
    liquidity: '$10.1M',
  },
]

export const topPoolTabs: FarmTab[] = [
  {
    title: 'Available',
    component: <StakePage />,
  },
  {
    title: 'Your stakes',
    component: <TabEmptyBoxRow />,
  },
]

export const allFarmsTabs: FarmTab[] = [
  {
    title: 'All Farms',
    component: <AllFarmsTable />,
  },
  {
    title: 'Your Farms',
    component: <YourFarmsTable />,
  },
]

export const topFarms: Farm[] = [
  {
    logo: <img src='/img/eleth.png' alt='Logo' width={'30px'} />,
    logoSml: <ETH />,
    network: 'ethereum',
    farmName: 'elETH',
    apy: '36.72%',
    lpt: '0.00',
    liquidity: '$10.1M',
  },
  {
    logo: <img src='/img/eleth.png' alt='Logo' width={'30px'} />,
    logoSml: <Arbitrum />,
    network: 'arbitrum',
    farmName: 'elETH',
    apy: '36.72%',
    lpt: '0.00',
    liquidity: '$10.1M',
  },
  {
    logo: <img src='/img/eleth.png' alt='Logo' width={'30px'} />,
    logoSml: <OP />,
    network: 'optimism',
    farmName: 'elETH',
    apy: '36.72%',
    lpt: '0.00',
    liquidity: '$10.1M',
  },
]

export const networks: Network[] = [
  {
    key: 'optimism',
    bgColor: 'rgb(255 45 70)',
    color: 'rgb(141, 22, 23)',
    icon: <Optimism />,
    name: 'Optimism',
  },
  {
    key: 'arbitrum',
    bgColor: 'rgb(23 140 255)',
    color: 'rgb(14, 24, 44)',
    icon: <Arbitrum />,
    name: 'Arbitrum',
  },
  {
    key: 'ethereum',
    bgColor: '#3b3b3b',
    color: 'rgb(52, 70, 139)',
    icon: <Ethereum />,
    name: 'Ethereum',
  },
]
export const farms: Farm[] = []

export const headerNavigationItems: HeaderNavigationItems[] = [
  {
    text: 'Home',
    url: '/home',
    icon: <BiHome size={18} />,
  },
  {
    text: 'Convert',
    url: '/convert',
    icon: <BiTransfer size={18} />,
  },
  {
    text: 'Farm',
    url: '/farm',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        className='scale-[0.9]'
      >
        <path
          d='M15 10.8V9a2.865 2.865 0 0 0-1-2.2V4h1V2h-2a.945.945 0 0 0-1 1v3h-1.3L8.9.7A.961.961 0 0 0 8 0H1v2h2v5.3a4.552 4.552 0 0 0-3 4.2A4.475 4.475 0 0 0 8.7 13H10a3 3 0 0 0 6 0 2.865 2.865 0 0 0-1-2.2ZM5 2h2.3l1.3 4H5Zm-.5 12a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Zm8.5 0a1 1 0 1 1 1-1 .945.945 0 0 1-1 1Z'
          fill='currentColor'
        ></path>
      </svg>
    ),
  },
  {
    text: 'veELT',
    url: '/veELT',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={16}
        height='13.995'
        className='jss853'
      >
        <g fill='currentColor'>
          <path d='m15.082 8.166-5.8 3.478a2.5 2.5 0 0 1-2.57 0L.918 8.166l-.675.4a.5.5 0 0 0 0 .858l7.5 4.5a.5.5 0 0 0 .514 0l7.5-4.5a.5.5 0 0 0 0-.858Z' />
          <path d='m15.757 4.571-7.5-4.5a.5.5 0 0 0-.514 0l-7.5 4.5a.5.5 0 0 0 0 .858l7.5 4.5a.5.5 0 0 0 .514 0l7.5-4.5a.5.5 0 0 0 0-.858Z' />
        </g>
      </svg>
    ),
  },

  {
    text: 'Overview',
    url: '/overview',
    icon: <BiBarChartSquare size={18} />,
  },
]

export const tokensOptions: SelectOption[] = [
  {
    label: 'All Tokens',
    value: 'all',
  },
  {
    label: 'USDC',
    value: 'usdc',
    icon: <USDC />,
  },
  {
    label: 'USDT',
    value: 'usdt',
    icon: <USDT />,
  },
  {
    label: 'ETH',
    value: 'eth',
    icon: <ETH />,
  },
  {
    label: 'BUSD',
    value: 'busd',
    icon: <BUSD />,
  },
]

export const chainsOptions: SelectOption[] = [
  {
    label: 'All Chains',
    value: 'all',
  },
  {
    label: 'Ethereum',
    value: 'ethereum',
    icon: <ETH />,
  },
  {
    label: 'BNB Chain',
    value: 'bnb',
    icon: <BNB />,
  },
  {
    label: 'Avalanche',
    value: 'avalanche',
    icon: <AvalancheChain />,
  },
  {
    label: 'Matic',
    value: 'matic',
    icon: <Matic />,
  },
  {
    label: 'Arbitrum',
    value: 'arbitrum',
    icon: <AirbitrumChain />,
  },
  {
    label: 'Optimism',
    value: 'optimism',
    icon: <OptimismChain />,
  },
  {
    label: 'Fantom',
    value: 'fantom',
    icon: <FantomChain />,
  },
]

export const allFarms: AllFarm[] = [
  {
    name: {
      title: 'elETH',
      icon: <img src='/img/eleth.png' alt='Logo' width={'30px'} />,
    },
    network: 'ethereum',
    liquidity: '$90,482,975.07',
    apy: '36.72%',
  },
  {
    name: {
      title: 'elETH',
      icon: <img src='/img/eleth.png' alt='Logo' width={'30px'} />,
    },
    network: 'arbitrum',
    liquidity: '$42,814,735.95',
    apy: '36.72%',
  },
  {
    name: {
      title: 'elETH',
      icon: <img src='/img/eleth.png' alt='Logo' width={'30px'} />,
    },
    network: 'optimism',
    liquidity: '$10,201,660.86',
    apy: '36.72%',
  },
]

export const allPools: AllPools[] = [
  {
    name: {
      title: 'USDC',
      icon: <USDC />,
    },
    network: 'ethereum',
    liquidity: '$90,482,975.07',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },

  {
    name: {
      title: 'USDT',
      icon: <USDT />,
    },
    network: 'ethereum',
    liquidity: '$90,482,975.07',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'ETH',
      icon: <ETH />,
    },
    network: 'ethereum',
    liquidity: '$22,439,267.39',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'USDT',
      icon: <USDT />,
    },
    network: 'bnb',
    liquidity: '$34,558,726.87',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'BUSD',
      icon: <BUSD />,
    },
    network: 'bnb',
    liquidity: '$39,274,392.06',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'USDC',
      icon: <USDC />,
    },
    network: 'avalanche',
    liquidity: '$56,697,899.56',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'USDT',
      icon: <USDT />,
    },
    network: 'avalanche',
    liquidity: '$44,507,384.31',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'USDC',
      icon: <USDC />,
    },
    network: 'matic',
    liquidity: '$18,329,205.78',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'USDT',
      icon: <USDT />,
    },
    network: 'matic',
    liquidity: '$19,406,942.99',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'USDC',
      icon: <USDC />,
    },
    network: 'arbitrum',
    liquidity: '$42,814,735.95',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'USDT',
      icon: <USDT />,
    },
    network: 'arbitrum',
    liquidity: '$12,366,697.77',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'ETH',
      icon: <ETH />,
    },
    network: 'arbitrum',
    liquidity: '$2,758,725.42',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'USDC',
      icon: <USDC />,
    },
    network: 'fantom',
    liquidity: '$21,692,964.17',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'USDC',
      icon: <USDC />,
    },
    network: 'optimism',
    liquidity: '$10,201,660.86',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
  {
    name: {
      title: 'ETH',
      icon: <ETH />,
    },
    network: 'optimism',
    liquidity: '$1,174,941.75',
    vol24: '$9,775,287.88',
    vol7d: '$13,518,789.85',
  },
]

export const transferTableDate: TransfersTableType[] = [
  {
    sourceToken: 'USDT',
    destinationToken: 'USDC',
    sourceNetwork: 'ethereum',
    destinationNetwork: 'arbitrum',
    amount: '39.98',
    value: '$40.00',
    account: '0x8bfb…b8c8',
    time: '2m ago',
  },
  {
    sourceToken: 'USDC',
    destinationToken: 'USDT',
    sourceNetwork: 'avalanche',
    destinationNetwork: 'bnb',
    amount: '17.61',
    value: '$17.62',
    account: '0x3ef8…b328',
    time: '1 m ago',
  },
  {
    sourceToken: 'ETH',
    destinationToken: 'ETH',
    sourceNetwork: 'ethereum',
    destinationNetwork: 'optimism',
    amount: '0.08',
    value: '$105.03',
    account: '0x150f...2376',
    time: '7m ago',
  },
  {
    sourceToken: 'USDC',
    destinationToken: 'USDT',
    sourceNetwork: 'avalanche',
    destinationNetwork: 'bnb',
    amount: '17.61',
    value: '$17.62',
    account: '0x3ef8…b328',
    time: '1 m ago',
  },
  {
    sourceToken: 'USDT',
    destinationToken: 'USDC',
    sourceNetwork: 'ethereum',
    destinationNetwork: 'arbitrum',
    amount: '39.98',
    value: '$40.00',
    account: '0x8bfb…b8c8',
    time: '2m ago',
  },
  {
    sourceToken: 'USDT',
    destinationToken: 'USDC',
    sourceNetwork: 'ethereum',
    destinationNetwork: 'arbitrum',
    amount: '39.98',
    value: '$40.00',
    account: '0x8bfb…b8c8',
    time: '2m ago',
  },
  {
    sourceToken: 'USDC',
    destinationToken: 'USDT',
    sourceNetwork: 'avalanche',
    destinationNetwork: 'bnb',
    amount: '17.61',
    value: '$17.62',
    account: '0x3ef8…b328',
    time: '1 m ago',
  },
  {
    sourceToken: 'ETH',
    destinationToken: 'ETH',
    sourceNetwork: 'ethereum',
    destinationNetwork: 'optimism',
    amount: '0.08',
    value: '$105.03',
    account: '0x150f...2376',
    time: '7m ago',
  },
  {
    sourceToken: 'USDC',
    destinationToken: 'USDT',
    sourceNetwork: 'avalanche',
    destinationNetwork: 'bnb',
    amount: '17.61',
    value: '$17.62',
    account: '0x3ef8…b328',
    time: '1 m ago',
  },
  {
    sourceToken: 'USDT',
    destinationToken: 'USDC',
    sourceNetwork: 'ethereum',
    destinationNetwork: 'arbitrum',
    amount: '39.98',
    value: '$40.00',
    account: '0x8bfb…b8c8',
    time: '2m ago',
  },
]

export const roadmapBlocks: RoadmapBlockProps[] = [
  {
    img: {
      src: '/img/background.jpg',
      width: 1555,
      height: 1104,
    },
    labelText: 'Convert',
    title: `Swap ETH LSD assets to elETH cross-chain, accessing our maximizer liquidity pools.`,
    subtitle: `To provide liquidity to the platform, users can deposit any of the four assets: ETH/stETH/frxETH/rETH into the ETHx pool contract. In exchange, an corresponding amount of elETH tokens are minted. The amount of elETH minted is proportional to the amount of assets deposited and the current proportion of the three assets in the maximizer pool. By providing liquidity to the pool, users can earn rewards in the form of more elETH tokens.`,
    progressPercentage: 30,
  },
  {
    img: {
      src: '/img/bg1.png',
      width: 1551,
      height: 967,
    },
    labelText: 'Farm',
    title: 'Stake elETH, earn real yield ELT token rewards',
    subtitle:
      'Farm is a feature that allows users to stake elETH to earn the platform token ELT. Compare to the ordinary LSD assets (e.g., stETH, cbETH, etc.) with 4% annualized yield, our dividend distribution mechanism brings 20%~40% ETH rewards plus additional veELT tokens to our holders by locking up ELT. ',
    progressPercentage: 50,
    layout: 'reverse',
  },
  {
    img: {
      src: '/img/bg4.png',
      width: 1554,
      height: 964,
    },
    labelText: 'Lock',
    title:
      'To lock the ELT token, earn veELT to boost APR and vest to veELT into ELT',
    subtitle:
      'Users can choose the ELT lock period, locking ELT will generate veELT in addition to the income from ETH. veELT can either be exchanged back to ELT or represent the protocol governance rights and boost the APR. This can significantly reduce selling pressure on ELT.  ',
    progressPercentage: 70,
  },
  {
    img: {
      src: '/img/bg3.png',
      width: 1554,
      height: 967,
    },
    labelText: 'Vest',
    title: 'veELT can be vested into ETH over a 60 day period',
    subtitle: `In order to vest veELT into ELT, an 200% amount of ELT must first be Locked. Once the Locking requirement is fulfilled, the vesting process will commence, and the veELT tokens will vest linearly into ELT over a 60-day period.
      For instance, to vest 100 veELT tokens, a user must have locked a minimum of 200 ELT tokens.`,
    progressPercentage: 100,
    layout: 'reverse',
  },
]

export const footerLinks: { [key: string]: FooterLinks } = {
  protocol: {
    title: 'Protocol',
    links: [
      {
        text: 'Gitbook',
        url: 'https://enlightfinance.gitbook.io/enlight-finance/',
      },
      {
        text: 'Snapshot',
        url: 'https://snapshot.org/#/',
      },
    ],
  },
  community: {
    title: 'Community',
    links: [
      {
        text: 'Twitter',
        url: 'https://twitter.com/EnLight_Fi',
      },
      // {
      //   text: 'Discord',
      //   url: '#',
      // },
      {
        text: 'Meduim',
        url: 'https://medium.com/@EnLightFinance',
      },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      {
        text: 'Github',
        url: 'https://github.com/EnLightFinance',
      },
    ],
  },
}
