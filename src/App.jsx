import { useState } from 'react'
import './Estilo.css'

class Contenedor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      id:null,
      tecla:null,
      name:null,
      id2:null
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
   playAudio = () => {//metodo playAudio
    let audio = document.getElementById(this.state.id2);
     audio.currentTime = 0; //para reproducir n-veces tras clicks
  audio.play();
  }
  
   handleClick(id,id2) {//manejador de eventos clic
     
  this.setState(prevState => ({
    clicked: true,
    id:id,
    id2:id2 ,
    name:id
  }), () => {
 this.playAudio();
  });
      
  setTimeout(() => {
    this.setState({clicked: false      
});
  }, 50);
     
}
 
render(){    
           return(
 <>
  <div id="drum-machine">
      <div className="otros">
            <div className="power">Power</div>
            <div className="switch">
              <div className="azul1"></div>
            </div>
            <div className="caption">{this.state.name}</div>
  <div className="azul2"></div> 
        <div className="linea"></div>
            <div className="bank">Bank</div>
            <div className="switch">
              <div className="azul1"></div>
            </div>
       </div>
            <div id="display"> 
                 <div className={this.state.clicked && this.state.id=="Heater 1" ? 'drum-pad drum-pad-clicked ':'drum-pad'}  id="Heater 1" onClick={() => this.handleClick('Heater 1','Q')} onKeyDown={() => this.handleKey('Heater 1','q')} >
 <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"  className='clip'  id="Q"  ></audio>Q 
                  </div>
                  <div className={this.state.clicked && this.state.id==="Heater 2" ? 'drum-pad drum-pad-clicked' : 'drum-pad'} onClick={() => this.handleClick('Heater 2','W')} id="Heater 2" onKeyDown={() => this.handleKey('Heater 2','w')}>
                     <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W" > </audio>W
                  </div>
                  <div className={this.state.clicked && this.state.id=="Heater 3" ? 'drum-pad drum-pad-clicked ' : 'drum-pad' } id="Heater 3" onClick={() => this.handleClick('Heater 3','E')} onKeyDown={() => this.handleKey('Heater 3','e')}>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E" > </audio>E
                  </div>
                   <div className={this.state.clicked && this.state.id=="Heater 4" ? 'drum-pad drum-pad-clicked ' : 'drum-pad' } id="Heater 4" onClick={() => this.handleClick('Heater 4','A')} onKeyDown={() => this.handleKey('Heater 4','a')}>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A" > </audio>A
                    </div>
                   <div className={this.state.clicked && this.state.id=="Clap" ? 'drum-pad drum-pad-clicked ' : 'drum-pad' } id="Clap" onClick={() => this.handleClick('Clap','S')} onKeyDown={() => this.handleKey('Clap','s')}>
                    <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S" > </audio>S
                  </div>
                 <div className={this.state.clicked && this.state.id=="Open HH" ? 'drum-pad drum-pad-clicked ' : 'drum-pad' } id="Open HH" onClick={() => this.handleClick('Open HH','D')} onKeyDown={() => this.handleKey('Open HH','d')}>
                 <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D" > </audio>D
                </div>
             <div className={this.state.clicked && this.state.id=="Kick n' Hat" ? 'drum-pad drum-pad-clicked ' : 'drum-pad' } id="Kick n' Hat" onClick={() => this.handleClick("Kick n' Hat",'Z')} onKeyDown={() => this.handleKey("Kick n' Hat",'z')}>
             <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z" > </audio>Z
              </div>
            <div className={this.state.clicked && this.state.id=="Kick" ? 'drum-pad drum-pad-clicked ' : 'drum-pad' } id="Kick" onClick={() => this.handleClick('Kick','X')} onKeyDown={() => this.handleKey('Kick','x')}>
             <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X" > </audio>X
              </div>
           <div className={this.state.clicked && this.state.id=="Close HH" ? 'drum-pad drum-pad-clicked ' : 'drum-pad' } id="Close HH" onClick={() => this.handleClick('Close HH','C')} onKeyDown={() => this.handleKey('Close HH','c')}>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C" > </audio>C
              </div>          
    </div>{/*cierra display*/}
 </div>
</>
     );
  }
}

ReactDOM.render(<Contenedor />,document.getElementById('root'));
