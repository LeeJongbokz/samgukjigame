import Game from './Game';
import {gameConfig} from './Game';
import Army from './Army';
import Affairs from './Affairs';
import Info from './Info';
import ReadyForWar from './ReadyForWar';
import Fight from './Fight';
import Config from './Config';
import Nation from './Nation';


export default class City{

    constructor(Nation, name, Army, Affairs, Info){
        this.nationName = Nation.name;
        this.name = name;
        this.Army = Army;
        this.Affairs = Affairs;
        this.Info = Info; 
    };

  

    chooseCommercialInvestment(){

        let selectedPeople = [];
        let num = selectedPeople.length;
        console.log(this.Info.people);

        for(let i=0; i<this.Info.people.length; i++){
            
            if(num == 3){
                break;
            }

            selectedPeople.push(this.Info.people[i]);
            num += 1;
        }


        console.log(gameConfig.inputGold);
        console.log(selectedPeople);
        

        this.Affairs.doCommercialInvestment(selectedPeople, num, gameConfig.inputGold);

    }

    chooseLandDevelopment(){

        let selectedPeople = [];
        let num = selectedPeople.length;
        console.log(this.Info.people);

        for(let i=0; i<this.Info.people.length; i++){
            
            if(num == 3){
                break;
            }

            selectedPeople.push(this.Info.people[i]);
            num += 1;
        }
        

        this.Affairs.doLandDevelopment(selectedPeople, num, gameConfig.inputGold);

    }

    chooseMilitaryTraining(){

        let selectedPeople = [];
        let num = selectedPeople.length;
        console.log(this.Info.people);

        for(let i=0; i<this.Info.people.length; i++){
            
            if(num == 3){
                break;
            }

            selectedPeople.push(this.Info.people[i]);
            num += 1;
        }
        

        this.Army.doMilitaryTraining(selectedPeople, num);
    }

    chooseDraft(){

        this.Army.doMilitaryTraining(this.Info.people[0], 5000, this);

    }

}

