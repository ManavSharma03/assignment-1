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
        const quotesList = await fetchMockQuotes().catch((err) => {
            /**
             * TODO: Currently have used mock data because of error with the RapidAPI 
             * 1. API-key error
             * 2. CORS error
             */
            setQuotes(mockQuotes);
        });
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
            {quotes.map((quote) => {
                return (
                    <div className="text-container ">
                        <p className="quote "> {quote.text}</p>
                    </div>
                );
            })}

        </>
    );
}

export default RandomQuotes;