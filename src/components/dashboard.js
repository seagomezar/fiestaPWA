import React from 'react';
import { Redirect } from 'react-router-dom';
import Protected from './protected';
import UserLayout from './user-layout';
import Pregunta from './pregunta';
import preguntas from './preguntas.json';

class Dashboard extends React.Component {
  onCompletedRedirectUrl = '/felicidades';

  index = 0;

  constructor(props) {
    super(props);
    this.getNextQuestion = this.getNextQuestion.bind(this);
    this.finish = this.finish.bind(this);
    this.state = {
      currentQuestion: 0,
      completed: false,
      lastQuestion: preguntas.data.pop(),
      questions: [...preguntas.data].sort(() => Math.random() - 0.5),
    };
  }

  getNextQuestion() {
    const { currentQuestion } = this.state;
    this.index = currentQuestion + 1;
    this.setState({ currentQuestion: this.index });
  }

  finish() {
    this.setState({ completed: true });
  }

  render() {
    const {
      currentQuestion, completed, questions, lastQuestion,
    } = this.state;
    if (completed) {
      return <Redirect to={this.onCompletedRedirectUrl} />;
    }
    return (
      <Protected>
        <UserLayout>
          <div className="columns is-multiline">
            <div>
              {(questions && questions.length && questions.length > this.index)
                ? (
                  <Pregunta
                    STAND={questions[currentQuestion].STAND}
                    TEXTO={questions[currentQuestion].TEXTO}
                    CODIGO={questions[currentQuestion].CODIGO}
                    LAST={false}
                    NUMERO={currentQuestion}
                    getNextQuestion={this.getNextQuestion}
                    finish={this.finish}
                  />
                )
                : ''}
              { (questions && questions.length && questions.length <= this.index) ? (
                <Pregunta
                  STAND={lastQuestion.STAND}
                  TEXTO={lastQuestion.TEXTO}
                  CODIGO={lastQuestion.CODIGO}
                  NUMERO={currentQuestion}
                  LAST="true"
                  getNextQuestion={this.getNextQuestion}
                  finish={this.finish}
                />
              ) : ''}

              { (!questions && questions.length <= this.index) ? 'Loading' : ''}
            </div>
          </div>
        </UserLayout>
      </Protected>
    );
  }
}

export default Dashboard;
