import { useEffect, useState } from "react"

const useCard = () =>{
    const [card, SetCard] = useState([])
    const [loading, SetLoading] = useState(true);
    useEffect(() =>{
        fetch("http://localhost:5000/card")
        .then(res => res.json())
        .then(data =>{ 
            SetCard(data)
             SetLoading(false);
             console.log(data)
        })
       
    },[card.length])

    return[card, loading]

}

export default useCard;