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
export default getInputHints;
