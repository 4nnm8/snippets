function removeDiactrics(string) {
  string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// USAGE:

const sentence = "Bonne journée !"
const newSentence = removeDiactrics(sentence)

// OUTPUT: "Bonne journee !"
