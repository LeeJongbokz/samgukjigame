
import Army from './Army';
import Affairs from './Affairs';
import Info from './Info';
import City from './City';
import Fight from './Fight';

export default class ReadyForWar{

    constructor(City, Info){
        this.City = City;
        this.Info = Info;
        this.FightPeople = [];
    }

    // 전쟁에 나설 장수를 고르는 것
    // 최대 5명까지 가능
    chooseFightPeople(){
        let len = this.Info.people.length;

        for(let i=0; i<5; i++){
            if(i == len){
                break;
            }
            this.FightPeople.push(this.Info.people[i]);
        }

        return this.FightPeople;
    }
    
    
    // 전쟁에 가져갈 금을 계산하는 것 
    calculateGoldSupply(goldNeeded){

        let goldSupply = 0; 

        if(this.City.Affairs.gold >= goldNeeded){
            goldSupply = goldNeeded;
            this.City.Affairs.gold -= goldNeeded;
        }else{
            goldSupply = this.City.Affairs.gold;
            this.City.Affairs.gold = 0; 
        }

        return goldSupply;
    }


    // 전쟁에 필요한 군량을 계산하는 것 
    calculateProvisionsNeeded(){

        let provisionsNeeded = 0; 

        for(let i=0; i<this.FightPeople.length; i++){
            provisionsNeeded += (this.FightPeople[i].Army.numOfTroops/10)*30;
        }

        return provisionsNeeded;
    }

    
    // 전쟁에 가져갈 군량을 계산하는 것 
    calculateProvisionsSupply(provisionsNeeded){

        let provisionsSupply = 0; 

        if(this.City.Affairs.provisions >= provisionsNeeded){
            provisionsSupply = provisionsNeeded;
            this.City.Affairs.provisions -= provisionsNeeded;
        }else{
            provisionsSupply = this.City.Affairs.provisions;
            this.City.Affairs.provisions = 0; 
        }

        return provisionsSupply;
    }



}