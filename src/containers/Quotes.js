import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes";

class Quotes extends Component {
  render() {
    const renderQuotes = () =>
      this.props.quotes.map((quote) => (
        <QuoteCard
          key={quote.id}
          quote={quote}
          removeQuote={this.props.removeQuote}
          upvoteQuote={this.props.upvoteQuote}
          downvoteQuote={this.props.downvoteQuote}
        />
      ));

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">{renderQuotes()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ quotes: state.quotes }), {
  removeQuote,
  upvoteQuote,
  downvoteQuote,
})(Quotes);
