// --- 1 --- Parašykite programą, kuri paims pirmą ir paskutinį skaičių iš masyvo ir sudės juos. Atsakymas turi būti 10;

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers[0] + numbers[numbers.length - 1]);

// --- 2 --- Parašykite programą, kuri suskaičiuos numbers bendrą skaičių sumą.

// const numbers = [10, 20, 50, 90, 100, 150];
// console.log(numbers.reduce((prev, curr) => prev + curr, 0));

// --- Parašykite programą, kuri suskaičiuos cities bendrą area sumą. ---

// const cities = [
// 	{ name: "Klaipeda", area: 10000 },
// 	{ name: "Vilnius", area: 50000 },
// 	{ name: "Kaunas", area: 30000 },
// 	{ name: "Siauliai", area: 8000 },
// ];

// console.log(cities.reduce((total, curr) => total + curr.area, 0));

// --- 3 --- Parašykite programą, kuri suras vartotoją su id=3 ir atvaizduos jo vardą bei slaptažodį.

// const users = [
// 	{ username: "rokasandreikenas", pass: "rokand", id: 1 },
// 	{ username: "zigmaszigmutis", pass: "ziggy", id: 2 },
// 	{ username: "simassimutis", pass: "simsam", id: 3 },
// ];

// users.find((user) =>
// 	user.id === 3
// 		? console.log(`vartotojas: ${user.username}, slaptazodis: ${user.pass}`)
// 		: ""
// );

// --- 4 --- Parašykite programą, kuri įstums į tuščią masyvą 3 vaisius. Susikurti const fruits = [].

// const fruits = [];
// fruits.push("Apple", "Pineapple", "Cherry");

// console.log(fruits);

// Parašykite programą, kuri įstums naują miestą į cities masyvą su atitinkamais duomenimis. Naudoti cities masyvą iš antros užduoties.

// const cities = [
// 	{ name: "Klaipeda", area: 10000 },
// 	{ name: "Vilnius", area: 50000 },
// 	{ name: "Kaunas", area: 30000 },
// 	{ name: "Siauliai", area: 8000 },
// ];

// cities.push({ name: "Telsiai", area: 4000 });

// console.log(cities);

// --- 5 --- Padarykite tokias pačias užduotis kaip 4 pratime, tik panaudokite unshift metodą. Parašykite komentarą kuo skiriasi push()ir unshift()metodai.

// const fruits = [];
// fruits.unshift("Apple");
// fruits.unshift("Pineapple");
// fruits.unshift("Cherry");

// console.log(fruits);
// -----------------------
// const cities = [
// 	{ name: "Klaipeda", area: 10000 },
// 	{ name: "Vilnius", area: 50000 },
// 	{ name: "Kaunas", area: 30000 },
// 	{ name: "Siauliai", area: 8000 },
// ];

// cities.unshift({ name: "Telsiai", area: 4000 });

// console.log(cities);

// skiriasi tuo, kad unshift ideda i masyvo prieki o push i gala.

// --- 6 --- Parašykite programą, kuri paliks vidurinį vardą masyve. Atsakymas turi būti ["Ash"]. const names = ["Rock", "Bob", "Ash", "Sue", "Johny"]. Parašykite komentarą kuo skiriasi pop() ir shift() metodai.

// const names = ["Rock", "Bob", "Ash", "Sue", "Johny"];
// names.pop();
// names.pop();
// names.shift();
// names.shift();

// console.log(names);

// pop ismeta galini itema, o shift priekini.

// --- 7 --- Parašykite programą, kuri paims pirmus du ir paskutinius vardus iš masyvo. Atsakymas turi būti: firstTwo = ["Rock", "Bob"];ir lastTwo="Sue", "Johny"].

// const names = ["Rock", "Bob", "Ash", "Sue", "Johny"];
// const slicedFirstTwo = names.slice([0], [2]);
// const slicedLastTwo = names.slice([3], [5]);

// console.log(slicedFirstTwo, slicedLastTwo);

// --- 8 --- Parašykite programą, kuri sujungs du masyvus į vieną. Naudokite 7 užduoties atsakymus kaip kintamuosius. Atsakymas turi būti concated = ["Rock", "Bob", "Sue", "Johny"];

// const names = ["Rock", "Bob", "Ash", "Sue", "Johny"];
// const slicedFirstTwo = names.slice([0], [2]);
// const slicedLastTwo = names.slice([3], [5]);

// console.log(slicedFirstTwo, slicedLastTwo);

// const concated = slicedFirstTwo.concat(slicedLastTwo);

// console.log(concated);

// --- 9 --- Parašykite programą, kuri papildys trūkstamus mėnesius. Mėnesių turi būti 12. const months = ["Sausis", "Kovas", "Balandis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Gruodis"].

// const months = [
// 	"Sausis",
// 	"Kovas",
// 	"Balandis",
// 	"Liepa",
// 	"Rugpjūtis",
// 	"Rugsėjis",
// 	"Spalis",
// 	"Gruodis",
// ];

// months.splice(1, 0, "Vasaris");
// months.splice(4, 0, "Geguze", "Birzelis");
// months.splice(10, 0, "Lapkritis");

// console.log(months);
