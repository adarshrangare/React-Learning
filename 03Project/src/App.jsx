import React from 'react'
import InputBox from './components/InputBox'
import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const App = () => {

    const BackgroundImage = 'https://i.pinimg.com/originals/3c/1c/b8/3c1cb8a62545c519f584160a9f1835df.jpg'

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from);
    
    const options = Object.keys(currencyInfo);

    function swap(){

        setFrom(to)
        setTo(from)
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }
    
    const convert = ()=>{
        setConvertedAmount(amount* currencyInfo[to])
    }

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('${BackgroundImage}')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                   convert();
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        currencyOptions={options}
                        amount={amount}
                        onAmountChange={(amount)=>setAmount(amount)}
                        onCurrencyChange = {(currency)=> setFrom(currency)}
                        selectCurrency={from}
                        
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={()=>swap()}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                <InputBox
                        label="To"
                        currencyOptions={options}
                        amount={convertedAmount}
                        onCurrencyChange = {(currency)=>(setTo(currency))}
                        selectCurrency={to}
                        
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {`${from.toUpperCase()} to ${to.toUpperCase()} `}
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default App