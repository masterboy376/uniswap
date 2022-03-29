import { useEffect, useState } from 'react'
import { client } from '../lib/sanityClient'
import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { FiArrowUpRight } from 'react-icons/fi'

const style = {
  wrapper:'w-full flex my-5 flex-col items-center',
  item:'bg-[#191a1e] text-center my-2 rounded-lg p-2',
  link:'text-blue-400 inline-flex'
}

const TransactionHistory = () => {
  const { isLoading, currentAccount } = useContext(TransactionContext)
  const [transactionHistory, setTransactionHistory] = useState([])

  useEffect(() => {
    ;(async () => {
      if (!isLoading && currentAccount) {
        const query = `
          *[_type=="users" && _id == "${currentAccount}"] {
            "transactionList": transactions[]->{amount, toAddress, timestamp, txHash}|order(timestamp desc)[0..4]
          }
        `

        const clientRes = await client.fetch(query)

        setTransactionHistory(clientRes[0].transactionList)
      }
    })()
  }, [isLoading, currentAccount])

  return (
    <div className={style.wrapper}>
        {transactionHistory &&
          transactionHistory?.map((transaction, index) => (
            <span className={style.item} key={index}>
              {transaction.amount}ETH Ξ sent to {transaction.toAddress.substring(0, 6)}... on {new Date(transaction.timestamp).toLocaleString('en-US', {
                  timeZone: 'PST',
                  hour12: true,
                  timeStyle: 'short',
                  dateStyle: 'long',
                })} <a
                href={`https://rinkeby.etherscan.io/tx/${transaction.txHash}`}
                target='_blank'
                rel='noreferrer'
                className={style.link}
              >
                View on Etherscan <FiArrowUpRight />
              </a>
            </span>
          ))}
    </div>
  )
}

export default TransactionHistory