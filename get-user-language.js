function getUserLanguage() {
  return (navigator.languages !== undefined ? navigator.languages[0] : navigator.language).substring(0, 2);
}
