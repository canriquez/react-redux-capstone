const getInputHints = (inputValue, objectList) => {
  let keysearch = [];
  if (inputValue.length < 2) { return []; }
  // first we add idpos to the original asset object as a new property
  // then we filter based on partial user input
  // to finally select the name and calculate the page number
  // where the crypto asset is located. We limit the result size to 4 max
  keysearch = objectList.map((obj, idpos) => ({ ...obj, idpos }))
    .filter(asset => (
      asset.name
        .substr(0, inputValue.length).toUpperCase() === inputValue.toUpperCase()))
    .map(obj => ({ name: obj.name, idpage: (Math.trunc(obj.idpos / 5) + 1) }));
  // limits to maximum 4 results
  return keysearch.slice(0, (keysearch.length >= 5 ? 4 : keysearch.length));
};

const getDate = (date) => {
  return date.slice(8, 10)
    + '/'
    + date.slice(5, 7)
    + '/'
    + date.slice(0, 4)
}

const textToBigCurrency = (numberText) => {

  return Math.abs(numberText) >= 1.0e+9

    ? (Math.abs(numberText) / 1.0e+9).toFixed(2) + " B"
    // Six Zeroes for Millions 
    : Math.abs(numberText) >= 1.0e+6

      ? (Math.abs(numberText) / 1.0e+6).toFixed(2) + " M"

      // Three Zeroes for Thousands
      : Math.abs(numberText) >= 1.0e+3

        ? (Math.abs(numberText) / 1.0e+3).toFixed(2) + " K"

        : (Math.abs(numberText)).toFixed(2);

}

export { getInputHints, getDate, textToBigCurrency };
