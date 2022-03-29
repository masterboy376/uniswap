import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../public/eth.png'
import uniswapLogo from '../public/uniswap.png'
import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
// import { client } from '../lib/sanityClient'

const style = {
    wrapper: `p-2 w-screen flex lg:flex-row flex-col items-center`,
    headerLogo: `flex w-full lg:w-1/3 items-center justify-center lg:justify-start`,
    nav: `flex-1 flex justify-center items-center`,
    navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
    navItem: `px-2 lg:px-4 py-2 m-1 flex items-center text-sm font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
    activeNavItem: `bg-[#20242A]`,
    buttonsContainer: `flex w-full lg:w-1/3 justify-center lg:justify-end pt-2 lg:pt-0 items-center`,
    button: `flex text-sm items-center bg-[#191B1F] rounded-2xl mx-1 text-[0.9rem] font-semibold cursor-pointer`,
    buttonPadding: `p-1 lg:p-2`,
    buttonTextContainer: `h-8 flex items-center`,
    buttonIconContainer: `flex items-center justify-center h-8 mr-1`,
    buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}

const Navbar = () => {
    const [selectedNav, setSelectedNav] = useState('swap')
    const [userName, setUserName] = useState('')
    const { connectWallet, currentAccount } = useContext(TransactionContext)

      useEffect(() => {
        if (currentAccount) {
    //       ;(async () => {
    //         const query = `
    //         *[_type=="users" && _id == "${currentAccount}"] {
    //           userName,
    //         }
    //         `
    //         const clientRes = await client.fetch(query)

    //         if (!(clientRes[0].userName == 'Unnamed')) {
    //           setUserName(clientRes[0].userName)
    //         } else {
              setUserName(
                `${currentAccount.slice(0, 4)}...${currentAccount.slice(currentAccount.length-3, currentAccount.length+1)}`,
              )
    //         }
    //       })()
        }
      }, [currentAccount])

    return (
        <nav className={style.wrapper}>
            <div className={style.headerLogo}>
                <Image src={uniswapLogo} alt='uniswap' height={60} width={60} />
            </div>

            <div className={style.nav}>
                <div className={style.navItemsContainer}>
                    <Link href={'/'}>
                        <a
                            onClick={() => setSelectedNav('swap')}
                            className={`${style.navItem} ${selectedNav === 'swap' && style.activeNavItem
                                }`}
                        >
                            Swap
                        </a>
                    </Link>
                    <Link href={'/'}><a
                        onClick={() => setSelectedNav('pool')}
                        className={`${style.navItem} ${selectedNav === 'pool' && style.activeNavItem
                            }`}
                    >
                        Pool
                    </a></Link>
                    <Link href={'/'}><a
                        onClick={() => setSelectedNav('vote')}
                        className={`${style.navItem} ${selectedNav === 'vote' && style.activeNavItem
                            }`}
                    >
                        Vote
                    </a></Link>
                    <Link href={'https://info.uniswap.org/#/'}><a
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className={style.navItem}>
                            Charts <FiArrowUpRight />
                        </div>
                    </a></Link>
                </div>
            </div>

            <div className={style.buttonsContainer}>
                <button className={`${style.button} ${style.buttonPadding}`}>
                    <div className={style.buttonIconContainer}>
                        <Image src={ethLogo} alt='eth logo' height={20} width={20} />
                    </div>
                    <p>Ethereum</p>
                    <div className={style.buttonIconContainer}>
                        <AiOutlineDown />
                    </div>
                </button>
                {currentAccount ? (
                    <div className={`${style.button} ${style.buttonPadding}`}>
                        <div className={style.buttonTextContainer}>{userName}</div>
                    </div>
                ) : (
                <button
                    onClick={() => connectWallet()}
                    className={`${style.button} ${style.buttonPadding}`}
                >
                    <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
                        Connect Wallet
                    </div>
                </button>
                )}
                <button className={`${style.button} ${style.buttonPadding}`}>
                    <div className={`${style.buttonIconContainer} mx-2`}>
                        <HiOutlineDotsVertical />
                    </div>
                </button>
            </div>
        </nav>
    )
}


export default Navbar