import React from "react";

function RenderCards({ words }) {
   const cards = words.cards.map((card) => (
      <div key={card.Id} className="col-4 scene" onClick={() => console.log('clicked')}>
         <div className="card">
            <div className="card-body d-flex justify-content-center align-items-center card__face card__face--front">
               {card.front}
            </div>
            <div className="card-body d-flex justify-content-center align-items-center card__face card__face--back">
               {card.back}
            </div>
         </div>
      </div>
   ));

   return <div className="row">{cards}</div>;
}

export default RenderCards;

//className={"card " + (this.state.showBack ? "is-flipped" : "")}
