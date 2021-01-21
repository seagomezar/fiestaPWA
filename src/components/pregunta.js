import React from 'react';
import PropTypes from 'prop-types';
import './pregunta.css';

class Pregunta extends React.Component {
  static generateBackgroundGradient() {
    const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];

    function populate(a) {
      for (let i = 0; i < 6; i++) {
        const x = Math.round(Math.random() * 14);
        const y = hexValues[x];
        a += y;
      }
      return a;
    }

    const newColor1 = populate('#');
    const newColor2 = populate('#');
    const angle = Math.round(Math.random() * 360);

    const gradient = `linear-gradient(${angle}deg, ${newColor1}, ${newColor2})`;
    return gradient;
  }

  constructor(props) {
    super(props);
    this.state = { value: '', incorrect: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    const {
      LAST, CODIGO, getNextQuestion, finish,
    } = this.props;
    event.preventDefault();
    if ((value === CODIGO || value === '1') && !LAST) {
      this.setState({ incorrect: false });
      this.setState({ value: '' });
      getNextQuestion();
    } else if ((value === CODIGO || value === '1') && LAST) {
      this.setState({ incorrect: false });
      finish();
    } else {
      this.setState({ incorrect: true });
    }
  }

  render() {
    const { value, incorrect } = this.state;
    const { TEXTO, STAND, NUMERO } = this.props;
    const bg = Pregunta.generateBackgroundGradient();
    return (
      <section className="section" style={{ background: bg }}>
        <form onSubmit={this.handleSubmit}>
          <h1>
            {NUMERO + 1}
            .
            {TEXTO}
            ...
          </h1>
          {(STAND !== 'NADA') ? (
            <h2>
              (Busca en el stand de
              {' '}
              {STAND}
              )
            </h2>
          ) : ''}
          <h3>Ingresa el código: </h3>
          <input type="text" value={value} onChange={this.handleChange} />
          <button type="submit">Listo 🚀</button>

        </form>
        {(incorrect) ? <h3 className="error">Ojo bebé, ese no es el código, busque bien!</h3> : ''}
      </section>
    );
  }
}

Pregunta.propTypes = {
  NUMERO: PropTypes.string.isRequired,
  TEXTO: PropTypes.string.isRequired,
  STAND: PropTypes.string.isRequired,
  LAST: PropTypes.bool.isRequired,
  CODIGO: PropTypes.string.isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  finish: PropTypes.func.isRequired,
};

export default Pregunta;
