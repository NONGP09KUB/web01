let scores = [78, 92, 45, 67, 88, 54, 39, 81, 95, 72];

console.log("คะแนนทั้งหมด:", scores);

let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}
console.log("คะแนนรวม:", total);

let average = total / scores.length;
console.log("คะแนนเฉลี่ย:", average.toFixed(2));

let pass = 0;
let fail = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 50) {
        pass++;
    } else {
        fail++;
    }
}
console.log("จำนวนคนสอบผ่าน:", pass);
console.log("จำนวนคนสอบไม่ผ่าน:", fail);