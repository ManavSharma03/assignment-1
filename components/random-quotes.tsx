import { fetchMockQuotes } from "@/app/services/mockQuotes";
import { mockQuotes } from "@/constants";
import { useEffect, useState } from "react";


type mockQuotesType = {
    "author": string;
    "category": string;
    "id": number,
    "text": string;
}

const RandomQuotes = () => {
    const [quotes, setQuotes] = useState<mockQuotesType[]>([]);

    useEffect(() => {
        handleFetchingQuotes();
    }, []);

    const handleFetchingQuotes = async () => {
        const quotesList = await fetchMockQuotes().catch((err) => setQuotes(mockQuotes));
        if (quotesList?.length) {
            setQuotes(quotesList);
        }
    };

    const noQuotes = quotes.length === 0;

    if (noQuotes) {
        return <> No data found.</>
    }
    return (
        <>
            <>
                {quotes.map((quote) => {
                    return (
                        <div className="text-container ">
                            <p className="quote "> {quote.text}</p>
                        </div>
                    );
                })}
            </>
        </>
    );
}

export default RandomQuotes;