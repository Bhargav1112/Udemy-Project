import React, { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const DUMMY_QUOTES = [
    { id: "q1", author: "Bhargav", text: "Learning React js is fun!" },
    { id: "q2", author: "Jayesh", text: "Learning React js is Great!" },
];

function QuoteDetail(props) {
    const params = useParams();
    const match = useRouteMatch();

    const {
        sendRequest,
        status,
        data: loadedQuote,
        error,
    } = useHttp(getSingleQuote, true);

    const { quoteId } = params;

    useEffect(() => {
        sendRequest(quoteId);
    }, [quoteId]);

    if (status === "pending") {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }
    if (error) {
        return <p className="centered">{error}</p>;
    }

    if (!loadedQuote.text) {
        return <p>No Quote found</p>;
    }
    return (
        <div>
            <HighlightedQuote
                text={loadedQuote.text}
                author={loadedQuote.author}
            />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </div>
    );
}

export default QuoteDetail;
