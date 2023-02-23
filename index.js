//Question 4 answer gotten from console is in the readme.md file
for (let i = 1; i < 20; i +=7) {
    console.log(i)
}


//Question 3
let classGroup = ("Enter Bolatito's class group: ");

if (classGroup === "Science") {
  console.log("Physics, Chemistry, Biology, Technical Drawing, English, Mathematics");
} else if (classGroup === "Social Science") {
  console.log("Accounting, Commerce, Marketing, Geography, English, Mathematics");
} else if (classGroup === "Arts") {
  console.log("Government, Economics, Literature, History, English, Mathematics");
} else {
  console.log("General Subjects: English, Mathematics");
}

//Question 5
let num = parseInt(("60: "));
let pwr = Math.pow(2, Math.round(Math.log2(32)));

console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);




