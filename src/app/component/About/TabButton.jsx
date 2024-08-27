import React from 'react'

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active 
    ? "text-primary border-b border-black" 
    :"text-black";
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-primary ${buttonClasses}`}>
            {children}
        </p>
    </button>
  )
}

export default TabButton
