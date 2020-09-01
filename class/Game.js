import Nation from './Nation';
import Abilities from './Abilities';
import Army from './Army';
import City from './City';
import Affairs from './Affairs';
import Info from './Info';
import ReadyForWar from './ReadyForWar';
import Fight from './Fight';
import Config from './Config';

let gameConfig;
let instance;

export default class Game{

     constructor(){

          if(instance){
               return instance;
          }

          instance = this; 
     }

     start(){
          gameConfig = new Config();            
     }

}

let newGame = new Game();
console.log("새 게임 시작!");
newGame.start();

export {gameConfig};



