import React from "react";

function RenderCards({ words }) {
   const cards = words.cards.map((card) => (
      <div key={card.Id} className="col-4 scene">
         
         <div className="card">
         
            <div className="card-body d-flex justify-content-center align-items-center card__face card__face--front">
            <button onClick={() => console.log('delete')}>delete</button>
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
