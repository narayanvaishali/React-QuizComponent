import React, { Component } from 'react';
let quizData = require('./quiz_data.json');

export default class Quiz  extends Component {
   
  constructor(props) {
        super(props);       
        this.state = { quiz_position: 1};
    }

  render() {
    return (
      <div className="QuizQuestion"> 
        {quizData.quiz_questions[0].instruction_text}
      </div>
    )
  }
}
