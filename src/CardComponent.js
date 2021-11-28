import React from 'react';


class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {showBack: false}
    }

    handleClick = () => {
        this.setState({showBack: !this.state.showBack})
        console.log(this.state)
    }

    render(){
        
        return(
            <div className="scene" onClick={this.handleClick}>
            <div className={"card " + (this.state.showBack ? "is-flipped" : "")}>
              <div className="card-body d-flex justify-content-center align-items-center card__face card__face--front">reir</div>
              <div className="card-body d-flex justify-content-center align-items-center card__face card__face--back">to laugh</div>
            </div>
          </div>
        )
    }
}

export default Card;