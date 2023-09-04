

alert("مرحباً بك في موقعي! أنا محمد ، وسوف أحسب درجتك");

let grade = prompt("أدخل درجتك");
let outputColor = "color:green;"
console.log(grade);


if (grade <=100 && grade >= 90){
 console.log("%c لقد حصلت على امتياز 🥳",outputColor);
}else if (grade >= 80 && grade < 100){
 console.log("لقد حصلت على جيد جداً🤩");
}else if (grade >70 && grade < 100){
 console.log("لقد حصلت على جيد🙂");
}else if (grade >60 && grade < 100){
    console.log("لقد حصلت على مقبول😕");
}else if (grade >50 && grade < 100){
    console.log( "لقد حصلت على ضعيف ☹️");
}else if (grade <50){
    console.log( "راسب💔");
}else {
    console.log("error");
}

// جافاسكربت ليست جافا