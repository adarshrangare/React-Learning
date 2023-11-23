import { useState, useEffect } from "react";


// Maximum hooks takes optional Args

// But this custom Hook is taking Currency arg is mandatory

function useCurrencyInfo(currency){
    
    const [data, setData] = useState({})
    

    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    useEffect(() => {

        fetch(url)
        .then((res)=>
            res.json()
        )
        .then((res)=>{
            setData(res[currency]);
        })

        console.log(data)
    }, [currency])
    
    // return [data,setData];
    console.log(data)

    return data;

}


export default useCurrencyInfo;