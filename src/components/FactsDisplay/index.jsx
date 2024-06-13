import { useState } from "react";

function FactDisplay({ fact, getFact }) {
    console.log(fact);

    const updateFact = (factId, newFactContent) => {
        setFacts(
            fact.map((f) => {
                if (f.id === factId) {
                    return {
                        ...f,
                        content: newFactContent,
                    };
                } else {
                    return f;
                }
            })
        )
    }
    return (
        <div>
            <h1>{fact}</h1>
            {/* fact 
            fact={item}
            key={item_id ? item_id : item.id} */}
        <button onClick={getFact}>
            Fact Button
        </button>
    
        </div>
    )
}

export default FactDisplay