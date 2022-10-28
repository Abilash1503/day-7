var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all', true);
request.send()
request.onload =function(){
    // let data = JSON.parse(request.response)
    // console.log(data);
    
    

// var res1=data.filter((element)=>element.region=="Asia")
// console.log(res1)
// var res2=data.filter((element)=>element.poplulation<200000)
// console.log(res2);

// var Data=JSON.parse(this.response)
// data.forEach((element)=>{
//     console.log( element.name,element.caiptal,element.flags);
// })
var Data =JSON.parse(this.response)
// const population=Data.reduce((acc,element)=>{
//     return acc+element.population
// },0)
// console.log(population);
//}
Data.filter((element)=>{
    for(let key in element.currencies){
        if(key=='USD'){
            console.log(element.name)
        }
    }
}
)
}