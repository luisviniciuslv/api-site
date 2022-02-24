const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const PORT = process.env.PORT || 8877;
const animes = [
    {'name': "Naruto classico", 'eps': 220, 'end': 'sim'},
    {'name': "Naruto Shippuden", 'eps': 500, 'end': 'sim'},
    {'name': "Tsuki Ga Kirei", 'eps': 12, 'end': 'sim'},
    {'name': "Nanatsu No Taizai", 'eps': 100, 'end': 'sim'},
    {'name': "Banana Fish", 'eps': 24, 'end': 'sim'},
    {'name': "One Punch Man", 'eps': 24, 'end': 'sim'},
    {'name': "Sword Art Online", 'eps': 73, 'end': 'sim'},
    {'name': "Akame Ga Kill", 'eps': 24, 'end': 'sim'},
    {'name': "Boku No Hero", 'eps': 113, 'end': 'não'},
    {'name': "Erased", 'eps': 12, 'end':'sim'},
    {'name': "Bunny Girl", 'eps': 13, 'end': 'sim'},
    {'name': "Demon Slayer", 'eps': 26, 'end': 'sim'},
    {'name': "The Promissed Never Lands", 'eps': 12, 'end': 'sim'},
    {'name': "Kakegurui", 'eps': 24, 'end': 'sim'},
    {'name': "Shingeki no kyojin", 'eps':"80 (até agora)", 'end': 'sim'},
    {'name': "Genjitsushugi Yuusha", 'eps':"13 (segunda temp em andamento)", 'end': 'sim'},
    {'name': "Seirei Gensouki", 'eps':"12", 'end': 'sim'},
    {'name': "Dragon Ball Super", 'eps':"131", "end": 'não'},
    {'name': "Ano hanna", 'eps':"11", "end": 'não'},
    {'name': "One piece", 'eps':"981", "end": 'daqui 5 anos eu termino'},
    {'name': "The Faraway Paladin", 'eps':24, "end": 'assistindo'},
    {'name': "teste", 'eps': 'testando', "end": 'testando'}
  ]

app.use(cors());

app.get('/animes', (req, res) => {
    res.json(animes)
});

app.listen(PORT, () => {
    console.log('escutando na porta '+PORT)
})