
import Person from './Person';
import Army from './Army';
import Affairs from './Affairs';
import Info from './Info';
import City from './City';
import ReadyForWar from './ReadyForWar';

export default class Fight{

       // city의 장수, city의 금, 군량 공급과 targetCity의 장수, targetCity의 금, 군량 공급으로 초기화
       // 최대 전투일수도 초기화
       constructor(city_FightPeople, city_goldSupply, city_provisionsSupply, targetCity_FightPeople, targetCity_goldSupply, targetCity_provisionsSupply, maxDays){
           this.city_FightPeople = city_FightPeople
           this.city_goldSupply = city_goldSupply;
           this.city_provisionsSupply = city_provisionsSupply;
           
           this.targetCity_FightPeople = targetCity_FightPeople;
           this.targetCity_goldSupply = targetCity_goldSupply;
           this.targetCity_provisionsSupply = targetCity_provisionsSupply;
           this.maxDays = maxDays; 
       }

       start(){

          let days = 1; 

          while(1){

              // days가 최대 전투일 수와 같아지면 while문 break 
              if(days == this.maxDays){
                  break; 
              }

              // city가 targetCity를 공격 
              // city의 장수는 targetCity의 장수를 순차적으로 1명씩 공격함
              this.attack(this.city_FightPeople, this.targetCity_FightPeople);

              // targetCity가 city를 공격 
              // targetCity의 장수는 city의 장수를 순차적으로 1명씩 공격함
              this.attack(this.targetCity_FightPeople, this.city_FightPeople);
              

              days += 1;    

          }

       }


       attack(fightPeopleA, fightPeopleB){

        for(let i=0; i<fightPeopleA.length; i++){

            // 공격 시행 여부
            let hasAttacked = false; 

            // 공격자가 공격 불능 상태이면, 턴을 1회 지나가게 함
            if(!this.isAttackable(fightPeopleA)){
                continue;
            }
          
            for(let j=0; j<fightPeopleB.length; j++){

              if(hasAttacked == true){
                  break; 
              }

              console.log(fightPeopleB[j].name);
              console.log(fightPeopleB[j].Army.numOfTroops);

              // 해당 공격 대상 장수의 군대수가 0보다 크고, 군대의 사기가 0보다 크고, 장수가 싸울 수 있는 상태일 때,
              if(this.isFightable(fightPeopleB[j])){
                    // 공격 데미지. 공격 데미지는 (장수의 힘*군대의 숫자*군대의 훈련도)/100000 

                    let attackType = Math.floor(Math.random()*2)+1;

                    if(attackType == 0){
                        let attackDamage = this.getAttackDamage(fightPeopleA[i]);
                        fightPeopleB[j].Army.numOfTroops = this.decreaseNumOfTroops(fightPeopleB[j], attackDamage);
                        hasAttacked = true;
                    }else{

                        let type = fightPeopleA[i].type;
                        let attackDamage = this.getSkilledAttackDamage(fightPeopleA[i], type);

                    }
                  
              }

              console.log(fightPeopleB[j].name);
              console.log(fightPeopleB[j].Army.numOfTroops);

            }
        }

       }

       // 공격 데미지를 계산함 
       getAttackDamage(person){

            let attackDamage = (person.Abilities.force*person.Army.numOfTroops*person*Army.troopsReadiness) / 100000;

            return attackDamage;
       }

       
       getSkilledAttackDamage(){
           
       }
  
       isAttackable(person){
           if(person.Army.unable == 0){
               return true;
           }else{
               person.Army.unable -= 1; 
               return false;
           }
       }

       isFightable(person){
            if(person.Army.fightable == true){
                return true;
            }else{
                return false;
            }
       }

       decreaseNumOfTroops(person, attackDamage){
            person.Army.numOfTroops -= attackDamage;
            person.Army.numOfTroops = Math.floor(person.Army.numOfTroops);

          if(person.Army.numOfTroops < 0){
                person.Army.numOfTroops = 0;
                person.Army.fightable = false;
          }

          return person.Army.numOfTroops;
       }


}