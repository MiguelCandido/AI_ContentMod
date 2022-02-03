import direitos from '../assets/direitos-autorais-e-de-imagem.jpg'
import '../assets/styles.css'

import { useState, useEffect, Component} from "react";
/* import { Link } from 'react-router-dom'; */

export default class Perfil extends Component {
    constructor(props) {
      super(props);
      this.state = {
        imagem: '',
      };
    }

    componentDidMount() {
        this.state.imagem = localStorage.getItem("url")
      }


    render() {
    return (
        <div>
            <main>
                <section id="conteudo2">
                    <div id="imagem">
                        <img src={direitos} alt="" />
                    </div>
                    <div id="alinhamento">
                        <span>nudez: xx%</span>
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
}}