import React, { useEffect, useState } from 'react';
import logo from './LOGO.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import './App.css';
import { Button } from '@mui/material';
import axios from 'axios';

const baseUrl = "https://bring-establishment-upset-sd.trycloudflare.com/cgi-bin",
      songUrl = `${baseUrl}/song`,
      currentUrl = `${baseUrl}/curr`,
      errSong = "Não foi possível obter a música atual",
      noSong = "Nenhuma música :<";

function App() {
  const [ audioPlaying, setAudioPlaying ] = useState(false);
  const [ currentSong, setCurrentSong ] = useState<string | null>(null);

  useEffect(() => {
    if (!currentSong?.trim()?.length)
      setCurrentSong(noSong);

    axios.get(currentUrl)
         .then(res => setCurrentSong(res.data))
         .catch(() => setCurrentSong(errSong));
  }, [ currentSong ]);

  axios.get(songUrl)
       .then(res => setCurrentSong(res.data))
       .catch(() => setCurrentSong(errSong));

  return (
    <div className="App">
      <header className="appHeader">
        <img src={logo} className="logo" alt="NAPALA" />
        <div className="subContainer notableRegular">
          Ouça o que nos inspira e se inspire nos ouvindo!
        </div>
      </header>

      <div className="card">
        <h1 className="napala">
          O NAPALA
        </h1>

        <span className="napala">NAPALA</span>, para nós, nunca foi apenas uma banda e sim um movimento, uma ideologia. O nome origina na gíria "pala", com significado de transparecer algo,
        normalmente com uma "má" conotação. A <span className="napala">NAPALA</span> subverte esse significado, trazendo justamente a transparência do que você é e de quem quiser ser, sem
        pensar no que terceiros achariam disso.

        <br />
        <br />

        Originada em 2022, a banda se inspira em blues, rock e mpb. passando por algumas formações, hoje se mantém fortificada em 3 ARTISTAS, que na hora da comunicação se tornam uma pessoa só:
        Marco Toledo (guitarra), Thiago Bernardi (vocal/bateria), Pedro 'Nobel' (vocal/baixo).

        Procuramos em nosso som fazer algo a mais do que só a música em si, tudo é importante na comunicação!
        damos importância a interpretações, roupagem, possibilitando mais liberdade a arte, trazendo um novo olhar, fazendo as pessoas enxergarem outros pontos de vista.
        algo genuinamente <span className="napala">NAPALA</span>.
      </div>

      <div className="card">
        <h1 className="napala">
          NOSSA RÁDIO
        </h1>

        Confira um pouco das nossas músicas e sons que nos inspiram!

        <br />
        <br />

        <center>
          <div className="playerControls">
            <Button
              onClick={() => { setAudioPlaying(!audioPlaying); }}
              variant="contained"
              sx={{
                "borderRadius": "100%",
                "aspectRatio": "1 / 1",
                "border": "1px solid #f3f3f3",
                "backgroundColor": "#3f3f3f",
                "padding": "0",
              }}
            >
              {
                audioPlaying ?
                (
                  <PauseIcon sx={{
                    "fontSize": "40px",
                  }} />
                ) :
                (
                  <PlayArrowIcon sx={{
                    "fontSize": "40px",
                  }} />
                )
              }
            </Button>
          </div>
        </center>

        {
          audioPlaying && (
            <audio src={`https://serve-cuba-ui-reporting.trycloudflare.com/?${Date.now()}`} preload="none" autoPlay={true}>
              Não foi possível reproduzir áudio :&lt;
            </audio>
          )
        }
        <br />

        <center>
          Tocando agora:&nbsp;
          <i>
            { currentSong }
          </i>
        </center>
      </div>

      <div className="card">
        <h1 className="napala">
          NOSSO MATERIAL
        </h1>

        <div className="material">
          <iframe
            style={{
              borderRadius: "12px",
              border: '0',
              width: "100%",
            }}
            src="https://open.spotify.com/embed/album/3UxFud0dj8O5gdrxnMFhAW?utm_source=generator&theme=0"
            height="352"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>

          <a href="https://napala.bandcamp.com/">
            <Button
              variant="outlined"
              sx={{
                color: "currentcolor",
                borderColor: "#3f3f3f",
              }}>
              <img src="https://s4.bcbits.com/img/favicon/favicon-32x32.png" alt="Bandcamp" />&nbsp;&nbsp;Bandcamp
            </Button>
          </a>

          <a href="https://soundcloud.com/bandanapala">
            <Button
              variant="outlined"
              sx={{
                color: "currentcolor",
                borderColor: "#3f3f3f",
              }}>
              <img src="https://a-v2.sndcdn.com/assets/images/sc-icons/favicon-2cadd14bdb.ico" alt="SoundCloud" />&nbsp;&nbsp;DEMOS no Soundcloud
            </Button>
          </a>

          <a href="https://www.youtube.com/@NapalaBanda">
            <Button
              variant="outlined"
              sx={{
                color: "currentcolor",
                borderColor: "#3f3f3f",
              }}>
              <img src="https://www.youtube.com/s/desktop/ceaca137/img/logos/favicon_32x32.png" alt="YouTube" />&nbsp;&nbsp;Nosso canal
            </Button>
          </a>
        </div>
      </div>

      <div className="card">
        <h1 className="napala">
          NOSSAS REDES
        </h1>

        <div className="material">
          <a href="https://www.instagram.com/_napala__">
            <Button
              variant="outlined"
              sx={{
                color: "currentcolor",
                borderColor: "#3f3f3f",
              }}>
              <img height="32px" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />&nbsp;&nbsp;Instagram
            </Button>
          </a>

          <a href="https://www.tiktok.com/@napalasc">
            <Button
              variant="outlined"
              sx={{
                color: "currentcolor",
                borderColor: "#3f3f3f",
              }}>
              <img height="32px" src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png" alt="TikTok" />&nbsp;&nbsp;TikTok
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
