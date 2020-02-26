console.log('test1..........................')
console.log('\n')
var semmi= {
    name : 'semmi',
    age : 15,
    gf : 3
}
function tampung (obj, check){
var flag = false


for (var key in obj){     
        if (key == check){
            flag = true
        }
    }
 return flag
}
console.log(tampung(semmi, 'gf'))
console.log(tampung(semmi, 'kelas'))
////////////////////////////////////////////////////////////////////////////////////////////
// function warna (isi){
// var tam= ['hijau','merah','ungu','merah']
// var kosong =[]

// var flag = false
// for (var i=0; i<tam.length; i++){
    
//     for( var j=0; j<isi.length;j++){
//         if ( isi[j] === tam[i]){
//             flag =true
//         }if( isi[j] !== tam[i]){
//             tam.push(isi[j])
//         }
//     }
// }return tam
// }
// console.log(warna(['merah','kuning','hijau','biru']))
//////////////////////////////////////////////////////////////////////////////////
console.log('\n')
console.log('test2.............................')
console.log('\n')
var paragraph =
"far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts!. Separated they! live in far away from Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small . When she reached the first hills! of the Italic Mountains,she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road!, the Line Lane. Pityful a rethoric question ran over her cheek!"

console.log(paragraph.match(/far/g))
console.log('\n')
console.log('test3.............................')
console.log('\n')
////////////////////////////////////////////////////////////////
var semmi= {
    name : 'semmi',
    age : 15,
    gf : 3
}
function tampung (obj, check){
var hasil= []
for (var key in obj){     
        if (key == check){
            hasil.push(obj)
        }
    }
 return hasil
}
console.log(tampung(semmi, 'gf'))
console.log(tampung(semmi, 'kelas'))
console.log('\n')
console.log('test3.............................')
console.log('\n')
////////////////////////////////////////////////////////////////
// var semmi= [{
//     name : 'semmi',
//     age : 15,
//     gf : 3
// },{
//     name : 'yoyok',
//     age : 18,
//     company : 'star Holding'
// }]
// function tampung (obj, check){
// var tampung = false
// for (var key in obj){
//     if( key == check){
//         tampung.push(obj[i])
//     }else{ return'not found'}
// }return tampung
// }
// console.log(tampung(semmi, 'company'))
// console.log(tampung(semmi, 'kelas'))
// console.log('\n')
// console.log('test4.............................')
// console.log('\n')
///////////////////////////////////////////////////
var aziz= {
    name : "semmi",
    age : 15,
    gf : 3
}
function checkobj (obj){  
        if (aziz.hasOwnProperty(obj)){
            return aziz[obj]
        }else{ return 'not found'}
}
console.log(checkobj('gf'))
console.log(checkobj("name"))
console.log('\n')
console.log('test5.............................')
console.log('\n')
////////////////////////////////////////////////////
var score = [{
    name: 'Dimitri',
    score: 90,
    class: 'fox'
},
{
    name: 'Alexei',
    score: 85,
   class : 'fox'
},
{
    name: 'Sergei',
    score: 74,
    class: 'tiger'
    
},
{
    name: 'Anastasia',
    score: 78,
    class : 'cat'
}]

for (var i= 0; i<score.length; i++){
    for (var j=i; j<score.length; j++){
        if (score[i].score>score[j].score){
            var temp = score[i]
            score[i] = score[j]
            score[j] = temp
        }
    }
}
console.log(temp)

///////////////////////////////////////////////////////////
var message = 'Regex seru DEH!';
console.log(message.match(/e/));
var hasil = {}
for (var i= 0; i<score.length; i++){
    for (var j=0; j<score.length; j++){
        if (score[i].score<score[j].score){
            hasil[score[i].class] = {
                    name :score[i].name,
                    score :  score[i].score
                }
             } 
        }
    }

console.log(hasil)
