import '../styles/globals.css'
import '../styles/custom.css'
import { TransactionProvider } from '../context/TransactionContext'

const styles = {
  wrapper: `bg-gradient-to-b from-[#6e2e3f] via-gray-800 to-gray-900 min-h-screen w-screen text-white`
}

function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
    <div className={styles.wrapper}>
      <Component {...pageProps} />
    </div>
    </TransactionProvider>
  )
}

export default MyApp
