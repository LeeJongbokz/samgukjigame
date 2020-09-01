import Config from './Config';

let gameConfig;
let instance;

// 싱글톤 패턴
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



