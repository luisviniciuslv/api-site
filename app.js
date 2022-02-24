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
    {'name': "Shingeki no kyojin", 'eps':"80 (até agora)", 'end': 'assistindo'},
    {'name': "Genjitsushugi Yuusha", 'eps':"13 (segunda temp em andamento)", 'end': 'sim'},
    {'name': "Seirei Gensouki", 'eps':"12", 'end': 'sim'},
    {'name': "Dragon Ball Super", 'eps':"131", "end": 'não'},
    {'name': "Ano hanna", 'eps':"11", "end": 'não'},
    {'name': "One piece", 'eps':"981", "end": 'daqui 5 anos eu termino'},
    {'name': "The Faraway Paladin", 'eps':24, "end": 'sim'},
  ]

const icons =  [
    {'link':'https://media.discordapp.net/attachments/916375412949528618/944127895557795860/bc227b46acba4458a9eca0ef73d95d50.jpg', 'tag':['GlitchCore']},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944132948976865381/wp10229075.jpg', 'tag':'Gothic'},
    {'link': 'https://cdn.discordapp.com/attachments/916375412949528618/944135905168474142/wp10229051-dark-anime-icons-wallpapers.jpg', 'tag':'Gothic'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944137429613416498/wp10229060-dark-anime-icons-wallpapers.jpg', 'tag':'Gothic'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944138342226858045/acf6e0e16ecab2d9dce4f80a2a5d5435.jpg', 'tag':'Gothic'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944138597659975680/62f1e7855ec72228b9943dc5c865a5f3.jpg', 'tag':'Cute'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944139067803721728/240836407288fe134e9591f627087258.jpg', 'tag':'Cute'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944139525230305310/original.jpg', 'tag':'Cute'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944140262232440843/d662395813e4bfb309e1598b89f89291.jpg', 'tag':'GlitchCore'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944140502972919828/3e373ecc3d55a6615e52aee81327c0af.jpg', 'tag':'GlitchCore'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944140977176731698/70860521a2d611477f60a3c11b070ed3.jpg', 'tag':'GlitchCore'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944286562173223002/wp10676174-glitchcore-pfp-wallpapers.png', 'tag':'GlitchCore'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944286918336725002/wp10676363-glitchcore-pfp-wallpapers.jpg', 'tag':'GlitchCore'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944287155541377024/wp10676383-glitchcore-pfp-wallpapers.jpg', 'tag':'GlitchCore'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944287489361842287/wp10676392-glitchcore-pfp-wallpapers.jpg', 'tag':'GlitchCore'},
    {'link':'https://cdn.discordapp.com/attachments/916375412949528618/944288105018568714/wp10676397-glitchcore-pfp-wallpapers.jpg', 'tag':'GlitchCore'},
    {'link':'https://cdn.discordapp.com/attachments/929539414810583111/944344893894037564/72627cbe125003ce7cedf877e1d7766e.jpg', 'tag':'Cute'},
    {'link':'https://cdn.discordapp.com/attachments/929539414810583111/944347118439632966/da211cf5639920f355188751c8ed85ec.jpg', 'tag':'Cute'},
    {'link':'https://cdn.discordapp.com/attachments/929539414810583111/944347359083642990/original.jpg', 'tag':'Cute'},
    {'link':'https://cdn.discordapp.com/attachments/929539414810583111/944347581394346064/632bc775395dc918cc5dda07293a9013.jpg', 'tag':'Gothic'},
    {'link':'https://cdn.discordapp.com/attachments/929539414810583111/944352568497291315/anime_aesthetic_kawaii_icon_358359057023203_by_kim_ashuri.jpg', 'tag':'GlitchCore'},
    {'link':'https://wallpapercave.com/dwp1x/wp10173151.jpg', 'tag':'Gothic'},
    {'link':'https://wallpapercave.com/wp/wp10173121.jpg', 'tag':'Gothic'},
    {'link':'https://wallpapercave.com/dwp1x/wp10229068.jpg', 'tag':'Gothic'},
    {'link':'https://wallpapercave.com/wp/wp10229083.jpg', 'tag':'Gothic'},
    {'link':'https://wallpapercave.com/dwp1x/wp10229085.jpg', 'tag':'Gothic'},
    {'link':'https://wallpapercave.com/dwp1x/wp10229088.jpg', 'tag':'Gothic'},
    {'link':'https://wallpapercave.com/uwp/uwp447012.jpeg', 'tag':'Cute'},
    {'link':'https://wallpapercave.com/uwp/uwp438387.jpeg', 'tag':'Cute'},
    {'link':'https://wallpapercave.com/uwp/uwp443619.jpeg', 'tag':'Cute'},
    {'link':'https://wallpapercave.com/uwp/uwp438389.jpeg', 'tag':'Cute'},
    {'link':'https://wallpapercave.com/uwp/uwp438386.png', 'tag':'Cute'},
    {'link':'https://wallpapercave.com/uwp/uwp438385.jpeg', 'tag':['Cute']},
    {'link':'https://wallpapercave.com/wp/wp8756073.jpg', 'tag':'Cute'},
    // {'link':'', 'tag':''},
    // {'link':'', 'tag':''},
    // {'link':'', 'tag':''},
    // {'link':'', 'tag':''},
    // {'link':'', 'tag':''},
    // {'link':'', 'tag':''},
    // {'link':'', 'tag':''},
    // {'link':'', 'tag':''},
    // {'link':'', 'tag':''},
  ]

app.use(cors());

app.get('/animes', (req, res) => {
    res.json(animes)
});

app.get('/icons', (req, res) => {
    res.json(icons)
});

app.listen(PORT, () => {
    console.log('escutando na porta '+PORT)
})
