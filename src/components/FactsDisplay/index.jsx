function FactDisplay({ fact }) {
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
            <fact 
            fact={item}
            key={item_id ? item_id : item.id}
            <button className="button">
                className="button"
                data-text="FunFact"
            New Fact</button>
    
        </div>
    )
}

export default FactDisplay