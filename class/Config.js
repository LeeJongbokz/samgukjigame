
let instance;


// 싱글톤 패턴
export default class Config{

    constructor(){

        if(instance){
            return instance;
       }
       
       this.inputGold = 100;
       this.maxDays = 30;
       this.warGoldPerPerson = 450;


       instance = this; 
       
    }
}