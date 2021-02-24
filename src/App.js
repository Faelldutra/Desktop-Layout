import { Header, Corpo, Avaliacao, Destaque, Footer } from './styledApp';
import SetaCima from './assets/SetaCima.png';
import SetaBaixo from './assets/SetaBaixo.png';
import SetaEsquerda from './assets/SetaEsquerda.png';
import praia from './assets/praia.png';
import camera from './assets/camera.png';
import boladacamera from './assets/boladacamera.png';
import cafe from './assets/cafe.png';
import Eventos from './assets/Eventos.png';
import casa from './assets/casa.png';
import lagoa from './assets/lagoa.png';
import campeche from './assets/campeche.png';
import tatto from './assets/tatto.png';
import cameracompleta from './assets/cameracompleta.png';
import estrela from './assets/estrela.png';
import pico from "./assets/pico.png";

const App = () => {

  return (
    <>
      <Header>
        <div className="config">
          <div className="logo">
            <div>
              <p>Tr<img src={SetaCima} alt="seta para cima"></img></p>
              <p><img className="configseta" src={SetaBaixo} alt="seta para baixo"></img>eler</p>
            </div>
            <div className="seta">
              <img src={SetaEsquerda} alt="seta para esquerda"></img>
              <div></div>
            </div>
          </div>
          <div className="acesso">
            <p>Cidade</p>
            <div>
              <p>Acesso restrito</p>
            </div>
          </div>
        </div>
        <div>
          <img src={praia} alt="praia"></img>
        </div>
      </Header>
      <Corpo>
        <div className="text">
          <h1>Florianópolis</h1>
          <div className="subText">
            <p>Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento</p>
            <span>É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.</span>
          </div>
        </div>
        <div className="espec">
          <div className="box">
            <div className="icons">
              <img className="bgimg" src={camera} alt="camera"></img>
              <img src={boladacamera} alt="circulo central da cẫmera"></img>
            </div>
            <div className="static">
              <h1>67</h1>
              <p>Pontos Turísticos</p>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <img className="bgimg" src={cafe} alt="xicara de cafe"></img>
            </div>
            <div className="static">
              <h1>20</h1>
              <p>Comida e Bebida</p>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <img className="bgimg" src={Eventos} alt="icone de eventos"></img>
            </div>
            <div className="static">
              <h1>11</h1>
              <p>Eventos Organizados</p>
            </div>
          </div>
        </div>
      </Corpo>
      <Avaliacao>
        <h1>Top avaliados</h1>
        <div className="bigbox">
          <div className="smallbox">
            <div className="imgconfig">
              <img src={casa} alt="casa"></img>
              <div className="nota">
                <img src={estrela} alt="estrela"></img>
                <p>4,7</p>
              </div>
            </div>
            <div className="box2">
              <div className="title">
                <p>Doce & Companhia</p>
              </div>
              <div className="subtilte">
                <p>Comida e Bebida</p> <img src={cafe} alt="cafe"></img>
              </div>
            </div>
          </div>
          <div className="smallbox">
            <div className="imgconfig">
              <img src={lagoa} alt="lagoa"></img>
              <div className="nota">
                <img src={estrela} alt="estrela"></img>
                <p>5.0</p>
              </div>
            </div>
            <div className="box2">
              <div className="title">
                <p>Lagoa da Conceição</p>
              </div>
              <div className="subtilte">
                <p>Pontos Turisticos</p> <img src={cameracompleta} alt="camera"></img>
              </div>
            </div>
          </div>
          <div className="smallbox">
            <div className="imgconfig">
              <img src={campeche} alt="praia campeche"></img>
              <div className="nota">
                <img src={estrela} alt="estrela"></img>
                <p>4,9</p>
              </div>
            </div>
            <div className="box2">
              <div className="title">
                <p>Praia do Campeche</p>
              </div>
              <div className="subtilte">
                <p>Pontos Turisticos</p> <img src={cameracompleta} alt="camera"></img>
              </div>
            </div>
          </div>
          <div className="smallbox">
            <div className="imgconfig">
              <img src={tatto} alt="floripa tatto"></img>
              <div className="nota">
                <img src={estrela} alt="estrela"></img>
                <p>5.0</p>
              </div>
            </div>
            <div className="box2">
              <div className="title">
                <p>Expo Tatto Floripa</p>
              </div>
              <div className="subtilte">
                <p>Comida e Bebida</p> <img src={Eventos} alt="eventos"></img>
              </div>
            </div>
          </div>
        </div>
      </Avaliacao>
      <Destaque>
        <div className="destaque">
          <div className="space">
            <div className="atention">
              <div className="circle">
                <p>!</p>
              </div>
              <p>Destaque</p>
            </div>
            <div className="configtext">
              <h1>Praia dos ingleses </h1>
              <p>Uma parte do paraíso na terra. Frequentemente com águas
              claras em tons verdes e azuis. Um dos locais mais preferidos
            por turistas e viajantes.</p>
            </div>
          </div>
          <img src={pico} alt="pico praia"></img>
        </div>
      </Destaque>
      <Footer>
        <p> Rafael Dutra &copy; 2021</p>
      </Footer>
    </>
  )
}

export default App;

