import Nation from './Nation';
import Abilities from './Abilities';
import Army from './Army';
import City from './City';
import Affairs from './Affairs';
import Info from './Info';
import ReadyForWar from './ReadyForWar';
import Fight from './Fight';
import War from './War';


export class Person {

    // 이름, 국가, 도시, 능력, 군대, 생존 여부로 초기화
    constructor(name, type, Nation, City, Abilities, Army, alive){
        this.name = name;
        this.type = type; 
        this.nationName = Nation.name;
        this.cityName = City.name;
        this.Abilities = Abilities;
        this.Army = Army;
        this.alive = alive;
    }   

    // 도시 변경 
    changeCity(newCity){
        console.log(this.city);
        this.city = newCity;
        console.log(this.city);
    }

    rush(attackDamage){
        return 1.2*attackDamage;
    }

    fireAttack(){
        
    }

    // 피공격자가 2턴 동안 공격 불능 상태가 되게 함
    confuse(person){

        let randNum = Math.floor(Math.random()*10)+1;

        if(this.Abilities.intelligence > person.Abilties.intelligence){
        
            // 공격자의 intelligence가 피공격자의 intelligence보다 높은 경우
            // 80%의 확률로 스킬 성공
            if(3<= randNum && randNum <= 10){
                person.Army.unable = 2;
            }else{
                console.log("스킬이 실패했습니다.");
            }

        }else{

            // 공격자의 intelligence가 피공격자의 intelligence와 같거나 낮은 경우
            // 20%의 확률로 스킬 성공
            if(1<= randNum && randNum <= 2){
                person.Army.unable = 2;
            }else{
                console.log("스킬이 실패했습니다.");
            }
        }
    }


    

}


// 빌더 패턴으로 Person 객체 초기화
class PersonBuilder{
    
    constructor(){
        this.person = new Person();
    }

    setName(name){
        this.person.name = name;
        return this;
    }

    setType(type){
        this.person.type = type;
    }

    setNation(Nation){
        this.person.nationName = Nation.name;
        return this;
    }

    setCity(City){
        this.person.cityName = City.name;
        return this;
    }

    setAbilities(Abilities){
        this.person.Abilities = Abilities;
        return this;
    }

    setArmy(Army){
        this.person.Army = Army;
        return this;
    }

    setAlive(alive){
        this.person.alive = alive;
        return this;
    }

    build(){
        return this.person;
    }

}




export class Monarch extends Person{

    constructor(name, Nation, City, Abilities, Army, alive){
        super(name, Nation, City, Abilities, Army, alive)
        // TODO: 최대힙
        this.people = [];
    }

    addPerson(person){
        this.people.push(person);
    }

    help(city, orderStandard){

        const INF = 9999;

        let pos = 0; 

        // 사람 1명을 선택

        if(orderStandard === "numOfTroops"){
        // 
           let maxnumOfTroops = -INF;

           for(let i=0; i<this.people.length; i++){
                if(people[i].Army.numOfTroops > maxnumOfTroops){ 
                    pos = i;
                    maxnumOfTroops = people[i].Army.numOfTroops;
                }
           }

        }else if(orderStandard === "troopsReadiness"){
   
            let maxtroopsReadiness = -INF;

            for(let i=0; i<this.people.length; i++){
                 if(people[i].Army.troopsReadiness > maxtroopsReadiness){ 
                     pos = i;
                     maxtroopsReadiness = people[i].Army.troopsReadiness;
                 }
            }
 

        }else if(orderStandard === "force"){
        
            let maxforce = -INF;

            for(let i=0; i<this.people.length; i++){
                 if(people[i].Abilities.force > maxforce){ 
                     pos = i;
                     maxforce = people[i].Abilities.force;
                 }
            }
     

        }else if(orderStandard === "loyalty"){
            
            let maxloyalty= -INF;

            for(let i=0; i<this.people.length; i++){
                 if(people[i].loyalty > maxloyalty){ 
                     pos = i;
                     maxloyalty = people[i].loyalty;
                 }
            }

        }

    }

    giveReward(person){
         
    }


}

export class SubOrdinates extends Person{

    constructor(name, Nation, City, Abilities, Army, alive, loyalty){
        super(name, Nation, City, Abilities, Army, alive);
        this.loyalty = loyalty;
    }

}

export class Commander extends SubOrdinates{  
    
    // 장군인 경우 '돌격'의 데미지가 기본 데미지에 (장군의 힘/50)이 곱해짐
    rush(attackDamage){
        return (this.Abilities.force/50)*attackDamage;
    }

    fireAttack(){

    }

}

export class Strategist extends SubOrdinates{



}


// 전쟁 시작
//console.log("War Start!!!");
// 도시 A가 도시 B를 공격

 // 촉나라, 위나라 생성
 let nationA = new Nation("촉");
 let nationB = new Nation("위");

 // 도시A의 군대 생성
 let cityA_Army = new Army(10000, 60, 90, 0, true);
 // 도시A의 내정 생성
 let cityA_Affairs = new Affairs(100000, 5000, 50000, 50, 100, 30, 50);
 // 도시A의 정보 생성
 let cityA_Info = new Info();

 // 도시B의 군대 생성
 let cityB_Army = new Army(10000, 60, 90, 0, true);
 // 도시B의 내정 생성
 let cityB_Affairs = new Affairs(80000, 6000, 60000, 50, 100, 30, 50);
 // 도시B의 정보 생성 
 let cityB_Info = new Info();

 // 도시A, 도시B 생성
 let cityA = new City(nationA, "양양", cityA_Army, cityA_Affairs, cityA_Info);
 let cityB = new City(nationB, "신야", cityB_Army, cityB_Affairs, cityB_Info);

 // 능력1, 군대1 생성
 let Abilities1 = new Abilities(100, 105, 80, 30, 80);
 let Army1 = new Army(10000, 80, 90, 0, true);

 // 능력2, 군대2 생성
 let Abilities2 = new Abilities(90, 85, 70, 80, 85);
 let Army2 = new Army(10000, 80, 90, 0, true);

 // 능력3, 군대3 생성
 let Abilities3 = new Abilities(90, 80, 100, 97, 85);
 let Army3 = new Army(10000, 80, 90, 0, true);

 // 능력4, 군대4 생성
 let Abilities4 = new Abilities(100, 105, 80, 30, 80);
 let Army4 = new Army(10000, 80, 90, 0, true);

 // 능력5, 군대5 생성
 let Abilities5 = new Abilities(90, 85, 70, 80, 85);
 let Army5 = new Army(10000, 80, 90, 0, true);

 // 능력6, 군대6 생성
 let Abilities6 = new Abilities(90, 80, 100, 97, 85);
 let Army6 = new Army(10000, 80, 90, 0, true);

 // 촉나라 장군(관우,마초), 군주(유비) 생성
 let Subordinates1_A = new SubOrdinates("관우", nationA, cityA, Abilities1, Army1, true, 90);
 let Subordinates2_A = new SubOrdinates("마초", nationA, cityA, Abilities2, Army2, true, 90);
 let Monarch_A = new Monarch("유비", nationA, cityA, Abilities3, Army3, true);

 // 군주의 people list에 장군(관우,마초) 추가
 Monarch_A.addPerson(Subordinates1_A);
 Monarch_A.addPerson(Subordinates2_A);

 // 도시A의 people list에 장군(관우,마초), 군주(유비) 추가
 cityA.Info.addPerson(Subordinates1_A);
 cityA.Info.addPerson(Subordinates2_A);
 cityA.Info.addPerson(Monarch_A);

 // 위나라 장군(하후돈,조인), 군주(조조) 생성
 let Subordinates1_B = new SubOrdinates("하후돈", nationB, cityB, Abilities4, Army4, true, 90);
 let Subordinates2_B = new SubOrdinates("조인", nationB, cityB, Abilities5, Army5, true, 90);
 let Monarch_B = new Monarch("조조", nationB, cityB, Abilities6, Army6, true);

 // 도시B의 people list에 장군(하후돈,조인), 군주(유비) 추가
 cityB.Info.addPerson(Subordinates1_B);
 cityB.Info.addPerson(Subordinates2_B);
 cityB.Info.addPerson(Monarch_B);

 let newWar = new War;
 
 newWar.start(cityA, cityB);


/*
console.log(cityA);
cityA.chooseMilitaryTraining();
console.log(cityA.Info.people[0]);
*/