"use strict";

const numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz");

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Oxirgi ko'rgan yangiliklaringiza biri"),
    b = prompt("Unga qancha baho bergan bo'lar edingiz?");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalNewsDB.news[a] = b;
    console.log("tayyor");
  } else {
    console.log("error");
    i--;
  }
}

if (personalNewsDB.count < 10) {
  console.log("Juda oz sonli yangiliklar o'qlibdi");
} else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
  console.log("Siz klassik tamoshabinsiz");
} else if (personalNewsDB.count >= 30) {
  console.log("Siz yangliklar ishqibozi ekansiz");
} else {
  console.log("Xato yuz berdi");
}

console.log(personalNewsDB);
