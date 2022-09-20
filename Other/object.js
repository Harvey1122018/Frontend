const fedor= {
x:10,
rail:true
}
const copyOffedor=fedor
copyOffedor.x=25
fedor.x='study'
console.log(fedor)

const myCity = {
    city: "Orenburg",        
    popular: 'true'
}
myCity.city = 'SPB'
console.log(myCity.city)
//Итог: объекты можно копировать и он содержит только ссылку на те параметры, которые заданы внутри.
// Также можно добавлять и менять текущие свойства объекта