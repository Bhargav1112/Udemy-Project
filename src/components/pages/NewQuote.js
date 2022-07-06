import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";

function NewQuote(props) {
    const history = useHistory();
    const { sendRequest, status } = useHttp(addQuote);

    useEffect(() => {
        if (status === "completed") {
            history.push("/quotes");
        }
    }, [status]);

    const newQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    };
    return (
        <QuoteForm
            isLoading={status === "pending"}
            onAddQuote={newQuoteHandler}
        />
    );
}

export default NewQuote;
