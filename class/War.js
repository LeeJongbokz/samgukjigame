import Nation from './Nation';
import Abilities from './Abilities';
import Army from './Army';
import City from './City';
import Affairs from './Affairs';
import Info from './Info';
import ReadyForWar from './ReadyForWar';
import Fight from './Fight';
import {gameConfig} from './Game';

export default class War{


    start(city1, city2){
            // City의 전쟁 준비
            // City의 장수 선정, 금, 군량 조사, 금, 군량 공급 확보
            let cityReadyForWar = new ReadyForWar(city1, city1.Info);
            let city_FightPeople = cityReadyForWar.chooseFightPeople();
            let num1 = city_FightPeople.length;
    
            let city_provisionsNeeded = cityReadyForWar.calculateProvisionsNeeded()
            let city_goldSupply = cityReadyForWar.calculateGoldSupply(num1*gameConfig.warGoldPerPerson);
            let city_provisionsSupply = cityReadyForWar.calculateProvisionsSupply(city_provisionsNeeded);
    
            // targetCity의 전쟁 준비
            // targetCity의 장수 선정, 금, 군량 조사 후, 금, 군량 공급 확보 
            let targetCityReadyForWar = new ReadyForWar(city2, city2.Info);
            let targetCity_FightPeople = targetCityReadyForWar.chooseFightPeople();
            let num2 = targetCity_FightPeople.length;
            
            let targetCity_provisionsNeeded = targetCityReadyForWar.calculateProvisionsNeeded(); 
            let targetCity_goldSupply = targetCityReadyForWar.calculateGoldSupply(num2*gameConfig.warGoldPerPerson);
            let targetCity_provisionsSupply = targetCityReadyForWar.calculateProvisionsSupply(targetCity_provisionsNeeded);
    
            // 전투 생성
            // 전투 생성은 Fight 클래스 활용 
            let fight = new Fight(city_FightPeople, city_goldSupply, city_provisionsSupply, targetCity_FightPeople, targetCity_goldSupply, targetCity_provisionsSupply, gameConfig.maxDays);
            
            // 전투 시작
            // Fight 클래스의 start() 활용
            // Comment: start()라는 함수 이름이 바뀌면, 
            fight.start();
    }

}