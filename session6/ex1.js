let studentString = "Quý, Nam, Lan, Hùng, Nam";

console.log("Chuỗi ban đầu:", studentString);

let students = studentString.split(", ");
console.log("Mảng students ban đầu:", students);

console.log("Mảng students sau khi đảo ngược:", students.reverse());

if (students.includes("Lan")) {
    console.log("Tên Lan tồn tại trong mảng");
} else {
    console.log("Tên Lan không tồn tại trong mảng");
}

let namIndex = students.indexOf("Nam");
console.log("Vị trí đầu tiên của tên 'Nam' trong mảng:", namIndex);




 