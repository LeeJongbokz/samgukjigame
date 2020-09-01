export default class Army{

    // 군대 수, 훈련도, 사기로 초기화 
    // 전투 가능 여부는 true로 초기화 
    constructor(numOfTroops, troopsReadiness, morale, unable, fightable){
        this.numOfTroops = numOfTroops;
        this.troopsReadiness = troopsReadiness;
        this.morale = morale;
        this.unable = unable; 
        this.fightable = fightable;
    }

    // 군사 훈련 
    doMilitaryTraining(selectedPeople, num){

        // 증가되눈 훈련도는 1에서 8사이에 랜덤값
        let increasedReadiness = Math.floor(Math.random()*8)+1;

        for(let i=0; i<num; i++){
            selectedPeople[i].Army.troopsReadiness += increasedReadiness;
            if(selectedPeople[i].Army.troopsReadiness >= 101){
                selectedPeople[i].Army.troopsReadiness = 100;
            }
        }

    }

    // 징병
    // 징병하는 사람, 징병 모집 수, 도시를 인자로 받음
    doDraft(person1, newNumOfTroops, city){

        // 도시의 금이 징병 모집 수의 1/10보다 크거나 같고, 도시의 인구가 징병 모집수보다 크거나 같을 때
        if( (city.Affairs.gold >= (newNumOfTroops/10)) && (city.Affairs.populations >= newNumOfTroops)){
            // 장수의 힘*1000이 징병 모집 수보다 크거나 같을 때,
            if(0<=newNumOfTroops && newNumOfTroops <= (person1.Abilities.force)*1000){
                // 도시의 금을 사용함
                city.Affairs.useGold(newNumOfTroops/10);
                // 도시의 인구를 감소시킴
                city.Affairs.populations -= newNumOfTroops;
                // 도시의 군대에 징병 모집 수를 추가
                this.numOfTroops += newNumOfTroops;

            }else{
                console.log("장수의 힘이 징병을 하기에 부족합니다.");
            }

        }else{
            console.log("도시의 금이 부족하거나 인구가 부족합니다.");
        }
    }

    // doTroopsDeployment 

}