module.exports = function check(str, bracketsConfig) {
	if (str === '') return true;
  if (str.length % 2 === 1) return false;	
  let count = 1;
  while(count !== 0) {
    count = 0;
    bracketsConfig.forEach(elem => {
      let block = elem[0] + elem[1];      
      if (str.indexOf(block) !== -1) {    	
        count++;
        let a = str.indexOf(block);
        str = str.slice(0, a) + str.slice(a + 2);
      }
    });
  }
  if (str.length === 0) return true;
  return false;
}