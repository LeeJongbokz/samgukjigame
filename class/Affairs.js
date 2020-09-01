
export default class Affairs{

    // 인구, 금, 군량, 금1당군량, 상업도, 토지가치, 주민충성도로 초기화
    constructor(populations, gold, provisions, provisionsPerGold, commerce, landValue, peopleLoyalty){
        this.populations = populations;
        this.gold = gold;
        this.provisions = provisions;
        this.provisionsPerGold = provisionsPerGold;
        this.commerce = commerce;
        this.landValue = landValue;
        this.peopleLoyalty = peopleLoyalty; 
    }


    // 상업 투자 
    doCommercialInvestment(selectedPeople, num, inputGold){
     
     console.log("Before:" + this.commerce);

     // 도시의 금이 투입하려는 금보다 많거나 같을 때
     if(this.gold >= num*inputGold){
            for(let i=0; i<num; i++){
                this.commerce += ((selectedPeople[i].Abilities.politicalPower)*(inputGold))/1000;   
            }
            this.gold -= (num*inputGold);
     }else{
        console.log("도시의 금이 부족합니다.");
     }

        // 도시의 변화된 상업도
        // 상업도는 내림값으로 적용 
        this.commerce = Math.floor(this.commerce);
        console.log("After:" + this.commerce);
     
    }
 
 
    // 토지 개발
    doLandDevelopment(selectedPeople, num, inputGold){
        
    console.log("Before:" + this.landValue);

     // 도시의 금이 투입하려는 금보다 많거나 같을 때
     if(this.gold >= num*inputGold){

            for(let i=0; i<num; i++){
                this.landValue += ((selectedPeople[i].Abilities.politicalPower)*(inputGold))/1000;   
            }
            this.gold -= (num*inputGold);
     }else{
        console.log("도시의 금이 부족합니다.");
     }
    

        // 도시의 변화된 상업도
        // 상업도는 내림값으로 적용 
        this.landValue = Math.floor(this.landValue);
        console.log("After:" + this.landValue);
            
    }

    // 금 사용
    useGold(gold){
        if(this.gold >= gold){
            this.gold -= gold;
        }else{
            console.log("도시의 금이 부족합니다.");
        }
    }

    // 주민 선정
    doFavorToCityPeople(provisions){

        // 도시의 군량이 지급하는 군량보다 많거나 같을 때
        if(this.provisions >= provisions){
            this.provisions -= provisions;
            let addedLoyalty = Math.floor(provisions/1000);
            this.peopleLoyalty += addedLoyalty;
            if(this.peopleLoyalty >= 101){
                this.peopleLoyalty = 100;
            }
        }else{
            console.log("도시의 군량이 부족합니다.")
        }
    }



}
