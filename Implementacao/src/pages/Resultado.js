import logo from '../../logo.svg';
import '../../App.css';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Reseultado() {
    return (
        <div>
            <section id="conteudo2">
                <div id="imagem">
                    <img src="../assets/direitos-autorais-e-de-imagem.jpg" alt="" />
                </div>
                <div id="alinhamento">
                    <span>nudez: xx%</span>
                    <span>armas xx%%</span>
                    <span>alcool xx%</span>
                    <span>drogas xx%</span>
                    <span>ódio xx%</span>
                    <span>violencia xx%</span>
                    <span>dados sensíveis xx%</span>

                    <Link to="/Resultado"><a href="">Voltar</a></Link>
                </div>

            </section>
            <footer>
                <span>ESCOLA senai de INFORMÁTICA - 2022</span>
            </footer>
        </div>
    );
}