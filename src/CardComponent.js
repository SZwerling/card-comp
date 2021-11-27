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
              <div className="card__face card__face--front">this is the front</div>
              <div className="card__face card__face--back">this is on the back and more stuff</div>
            </div>
          </div>
        )
    }
}

export default Card;