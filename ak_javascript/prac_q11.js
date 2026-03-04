//We are given array of marks of students. Filter out the marks of students who scored 90+.

let marks = [87, 93, 64, 99, 86];

let newArr = marks.filter((val) => {
    return val > 90;
});

console.log(newArr);