export default class Info{

    // 사람과 탐색한 도시로 초기화
    constructor(){
        this.people = [];
        this.informedCities = [];
    };

    // 도시에 새로운 사람 추가
    addPerson(person){
        this.people.push(person);
    }

    // 도시 탐색
    searchCity(person, city){
       this.informedCities.push(city);
    }

    // 도시에 속한 사람 출력
    showPeople(){
        let len = this.people.length;

        for(let i=0; i<len; i++){
            console.log(this.people[i]);
        }
    }

}
