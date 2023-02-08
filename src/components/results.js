import { useMemo, useState } from "react"

export default function Results({ items, onItemSelected, query, onResultsCalculated }) {
    const [results, setResults] = useState([]);
    const filteredItems = findMatch();

    function findMatch(items, query) {
        
    }

    return (
        <div>
            Hola
        </div>
    )
}