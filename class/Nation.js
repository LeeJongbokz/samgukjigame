
export default class Nation{

    // 이름과 속한 도시로 초기화
    constructor(name){
        this.name = name;
        this.cities = [];
    };

    // 속한 도시들을 출력
    showCities(){
        let len = this.cities.length;

        for(let i=0; i<len; i++){
            console.log(this.cities[i]);
        }
    }
}
