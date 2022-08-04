
function writeCards(names, event) {
    const cardContent=[];
    for (let i = 0; i<names.length; i++) {
        cardContent.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`,);
    }
    return cardContent
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

// function countdown(no) { 
//     let number= 0
//     while (number < no ) {
//     console.log(no-1);
//     number--
//     }
// }

// let countup = 0;
// while (countup < 10) {
//   console.log(countup++);
// }
function countDown() {
    let countdown = 10 ;
    while (countdown >= 0) {
    console.log(countdown--);
}
}
