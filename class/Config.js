
let instance;

export default class Config{

    constructor(){

        if(instance){
            return instance;
       }

       instance = this; 

        
       this.inputGold = 100;
       this.maxDays = 30;
       this.warGoldPerPerson = 450;

    }
}