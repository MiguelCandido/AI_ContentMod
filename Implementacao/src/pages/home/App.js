import logo from '../../logo.svg';
import '../../App.css';
import { useState, useEffect } from "react";
import axios from 'axios'

export default function App() {
  function ModeracaoImg() {
    const axios = require('axios');

    axios.get('https://api.sightengine.com/1.0/check.json', {
      params: {
        'url': 'https://sightengine.com/assets/img/examples/example6.jpg',
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
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
    <div>
      <input type="file" accept="image/*" />
      <button>Enviar</button>
    </div>
  );
}