import React,{useState,useEffect} from 'react'
import "./Quotes.css"
function Quotes() {

    const [quote,setQuotes] = useState("")
    const url = "https://api.quotable.io/random"

    useEffect(() => {
            fetchQuotes()
    },[])

    const fetchQuotes = () => {
        fetch(url)
        .then(response => response.json())
        .then(data => setQuotes(data) )
    }
    return (
        <div className='quotes'>
            <h1>QUOTES</h1>
            <div className="quotes-new-container">
                <div className="quote">
                    <h2>{quote.content}</h2>
                    <p>- <span>{quote.author}</span></p>
                </div>

                <div className="quotes-shadow">
                </div>
            </div>
            <button className="btn-grad" onClick={fetchQuotes}> New Quote</button>
        </div>
    )
}

export default Quotes
