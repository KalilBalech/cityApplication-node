const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()) // permitir a chamada da função

// Rota dinâmica para buscar informações de uma cidade
app.get('/:city', (req, res) => {
  const city = req.params.city.toLowerCase(); // Obtém o nome da cidade da URL e converte para minúsculas

  // Defina as informações da cidade com base no nome da cidade
  let cityInfo = {};
  switch (city) {
    case 'riodejaneiro':
      cityInfo = {
        city: 'Rio de Janeiro',
        description: 'Cidade Maravilhosa do Brasil!'
      };
      break;
    case 'paris':
      cityInfo = {
        city: 'Paris',
        description: 'Cidade do amor na França.'
      };
      break;
    case 'newyork':
      cityInfo = {
        city: 'New York',
        description: 'A cidade que nunca dorme nos EUA.'
      };
      break;
    case 'tokyo':
      cityInfo = {
        city: 'Tokyo',
        description: 'Capital movimentada do Japão.'
      };
      break;
    case 'roma':
      cityInfo = {
        city: 'Rome',
        description: 'Cidade eterna na Itália.'
      };
      break;
    case 'sydney':
      cityInfo = {
        city: 'Sydney',
        description: 'Cidade icônica na Austrália.'
      };
      break;
    case 'cairo':
      cityInfo = {
        city: 'Cairo',
        description: 'Cidade histórica no Egito.'
      };
      break;
    case 'machupicchu':
      cityInfo = {
        city: 'Machu Picchu',
        description: 'Antiga cidade inca no Peru.'
      };
      break;
    case 'istambul':
      cityInfo = {
        city: 'Istanbul',
        description: 'Cidade única que liga Europa e Ásia na Turquia.'
      };
      break;
    case 'cidadedocabo':
      cityInfo = {
        city: 'Cape Town',
        description: 'Belíssima cidade na África do Sul.'
      };
      break;
    default:
      // Se a cidade não for encontrada, retorne um erro 404
      return res.status(404).send('Cidade não encontrada.');
  }

  res.send(cityInfo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
