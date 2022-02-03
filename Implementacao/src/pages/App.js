import '../assets/styles.css'
import { React, Component } from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlimg: '',
    };
  }

  /* function imageOption(){
    document.getElementById("imageoption").src = ("imageoptionn") // coloque a variável das condições que vai mudar a imagem
    setTimeout(function(){ imagemOption(); }, 10000); //intervalo de 10 segundos
 } */

  /* function imageOption() {
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("imageoption").src = ('#img');
     });
   } */

  /* bannerImage = document.getElementById('bannerImg');
  imgData = getBase64Image(bannerImage);
  localStorage.setItem("imgData", imgData);

  function readURL(input) {
    document.getElementById("bannerImg").style.display = "block";

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        document.getElementById('bannerImg').src = e.target.result;
      }

      reader.readAsDataURL(input.files[0]);
    }
  } */

  /* const axios = require('axios');
   const FormData = require('form-data');
   const fs = require('fs');

   data = new FormData();
   data.append('media', fs.createReadStream('C:/Users/42410863817.INFOSCS/Desktop/Implementacao/implementacao/src/assets/img.png'));
   data.append('models', 'nudity,wad,offensive,text-content,gore');
   data.append('api_user', '1374066647');
   data.append('api_secret', 'qiD7P27GafceZqK4zB9K');

   axios({
     method: 'post',
     url: 'https://api.sightengine.com/1.0/check.json',
     data: data,
     headers: data.getHeaders()
   })
     .then(function (response) {
       // on success: handle response
       console.log(response.data);
     })
     .catch(function (error) {
       // handle error
       if (error.response) console.log(error.response.data);
       else console.log(error.message);
     });*/

     updateEstado = async (event) => {
      await this.setState({
        urlimg : event.target.value
  
      })
  
      console.log(this.state.urlimg)
    }

    envio = () => {
      localStorage.setItem('url', this.state.urlimg)
      console.log("Enviei")
    }


  render() {
  return (
    <div>
      <main>
        <section id="conteudo">
          <h1>O quão sensível é sua imagem?</h1>
          <span>A partir da utilização dos serviços da API do SightEngine, podemos detectar a probabilidade da sua imagem de conter conteúdos sensíveis (Nudez, armas, drogas, álcool, violência)</span>
          <form id="formulario">
            <input type="url" id="file" placeholder="Adicione a url da imagem" onChange ={this.updateEstado} value={this.state.urlimg}/>
            <Link to="/Resultado"><button type="submit" onClick={this.envio}>Enviar</button></Link>
          </form>

        </section>

        <footer>
          <span>ESCOLA senai de INFORMÁTICA - 2022</span>
        </footer>
      </main>
    </div>
  );
}
}