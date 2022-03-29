import React from 'react'

const Footer = () => {
    const style = {
        wrapper: `px-auto py-5 text-center text-white text-sm`,
        mainText: `text-pink-600`,
    }
  return (
    <div className={style.wrapper}>Created by <span className={style.mainText}>@SambhavKaushik</span></div>
  )
}

export default Footer