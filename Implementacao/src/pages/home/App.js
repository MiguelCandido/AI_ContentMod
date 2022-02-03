import logo from '../../logo.svg';
import '../../App.css';
import { useState, useEffect } from "react";

export default function App() {
  /* function imageOption(){
    document.getElementById("imageoption").src = ("imageoptionn") // coloque a variável das condições que vai mudar a imagem
    setTimeout(function(){ imagemOption(); }, 10000); //intervalo de 10 segundos
 } */
 
 /* function imageOption() {
   document.addEventListener("DOMContentLoaded", function () {
     document.getElementById("imageoption").src = ('#img');
    });
  } */
  //const [novaUrl, setNovaUrl] = useState('')
  const input = document.querySelector('#input');

  function ModeracaoImg() {
    const axios = require('axios');

    axios.get('https://api.sightengine.com/1.0/check.json', {
      params: {
        'url': 'https://st3.depositphotos.com/1426049/15210/i/950/depositphotos_152102950-stock-photo-blurred-alcohol-bottles-on-a.jpg',
        'models': 'nudity,wad,offensive,text-content,gore',
        'api_user': '1374066647',
        'api_secret': 'qiD7P27GafceZqK4zB9K',
      }
    })
      .then(function (response) {
        // on success: handle response
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        if (error.response) console.log(error.response.data);
        else console.log(error.message);
      });
  }

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

  useEffect(ModeracaoImg, []);

  return (
    <div>
      <input id='input' type="text" />
      <button type="submit">Enviar</button>
      {/* <div onload="imageOption()">
        <img width="50px" id="imageoption" src="img" />
      </div> */}
    </div>
  );
}