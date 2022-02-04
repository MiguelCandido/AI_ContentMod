import '../assets/styles.css'

import { Component } from "react";
/* import { Link } from 'react-router-dom'; */

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resposta: {},
    };
  }

  ModeracaoImg = () => {
    const axios = require('axios');
    var that = this;

    axios.get('https://api.sightengine.com/1.0/check.json', {
      params: {
        'url': localStorage.getItem("url"),
        'models': 'nudity,wad,offensive,text-content,gore',
        //'api_user': '965575714',
        //'api_secret': 'VmXAhhDadWLZEHf4oYhP',
        'api_user': '599816885',
        'api_secret': 'Qo5HVp6PdTcToczZiST5',
      }

    })
      .then(function (response) {
        // on success: handle response
        that.setState({ resposta: response.data })
        //console.log(that.state.resposta)
        
        console.log(`Nudez: ${1.0 - that.state.resposta.nudity.safe}%`)  
        console.log(`Armas: ${that.state.resposta.weapon}%`) 
        console.log(`Álcool: ${that.state.resposta.alcohol}%`)
        console.log(`Drogas: ${that.state.resposta.drugs}%`)
        console.log(`Ofensivo: ${that.state.resposta.offensive.prob.toFixed(2)}%`)
        console.log(`Sangue ${that.state.resposta.gore.prob}%`)
        console.log(that.state.resposta.text.profanity)
        console.log(that.state.resposta.text.personal)
        console.log(that.state.resposta.text.link)
      })

      .catch(function (error) {
        // handle error
        if (error.response) console.log(error.response.data);
        else console.log(error.message);
      });
  }

  componentDidMount() {
    this.ModeracaoImg();
  }

  render() {
    return (
      <div>
        <main>
          <section id="conteudo2">
            <div id="imagem">
              <img src={localStorage.getItem("url")} alt="" />
            </div>
            <div id="alinhamento">
              <span>nudez:xx%</span>
              <span>armas xx%%</span>
              <span>alcool xx%</span>
              <span>drogas xx%</span>
              <span>ódio xx%</span>
              <span>violencia xx%</span>
              <span>dados sensíveis xx%</span>

              {/* <Link to="/Resultado"><a href="">Voltar</a></Link> */}
            </div>

          </section>

          <footer>
            <span>ESCOLA senai de INFORMÁTICA - 2022</span>
          </footer>
        </main>
      </div>
    );
  }
}