import React, { Component } from "react";

import Input from "./input";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      color: '',
      pluralNoun: '',
      adjectiveOne: '',
      celebOne: '',
      adjectiveTwo: '',
      nounOne: '',
      numberOne: '',
      numberTwo: '',
      nounTwo: '',
      adjectiveThree: '',
      celebTwo: '',
      celebThree: '',
      adjectiveFour: '',
      nounThree: '',
      celebFour: '',
      adjectiveFive: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  render() {

    const inputData = [
      { title: 'color', this.state.color, name: 'color' },
      { title: 'Plural Noun', this.state.pluralNoun, name: 'pluralNoun' },
      { title: 'Adjective', this.state.adjectiveOne, name: 'adjectiveOne' },
      { title: 'Celebrity', this.state.celebOne, name: 'celebOne' },

      { title: 'Adjective', this.state.adjectiveTwo, name: 'adjectiveTwo' },
      { title: 'Noun', this.state.nounOne, name: 'nounOne' },
      { title: 'Number', this.state.numberOne, name: 'numberOne' },
      { title: 'Number', this.state.numberTwo, name: 'numberTwo' },

      { title: 'Noun', this.state.nounTwo, name: 'nounTwo' },
      { title: 'Adjective', this.state.adjectiveThree, name: 'adjectiveThree' },
      { title: 'Celebrity', this.state.celebTwo, name: 'celebTwo' },
      { title: 'Celebrity', this.state.celebThree, name: 'celebThree' },

      { title: 'Adjective', this.state.adjectiveFour, name: 'adjectiveFour' },
      { title: 'Noun', this.state.nounThree, name: 'nounThree' },
      { title: 'Celebrity', this.state.celebFour, name: 'celebFour' },
      { title: 'Adjective', this.state.adjectiveFive, name: 'adjectiveFive' },
    ]


    return (
      <div className="card">
        {
          inputData.map(data => Input((data), this.handleInputChange))
        }
        <Content />

      </div>
    );
  }
}

export default Card;
