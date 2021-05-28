words = [
'Hello',
'Bird',
'Banana',
'Apple',
'Rain',
'Bed',
'Plant',
'House',
'Tree',
'Walnut',
'Computer',
'Website',
'Grass',
'Car',
'Chimney',
'Country',
'Sky',
'Park',
'Train',
'Theater',
'Card'
];

function randomWord() {
document.getElementById("textbox").value = words[Math.floor(Math.random() * words.length)];
}
