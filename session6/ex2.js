let price = [100, 200, 300, 400];

console.log("Giá trị của từng phần tử là: ");
for (let value of price) {
  console.log(value);
}

console.log("Vị trí (index) của từng phần tử là: ");
for (let index in price) {
  console.log(index);
}

let sum = 0;

for (let i = 0; i < price.length; i++) {
  if (i % 2 === 0) {
    sum += price[i];
  }
}

console.log("Tổng các phần tử ở index chẵn =", sum);