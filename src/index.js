module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0){
  	return false;
  }
  let i,
  	j,
  	length = str.length,
  	configLength = bracketsConfig.length,
  	count = 0;

  	for (i = 0; i < length; i++){
  		for (j = 0; j < configLength; j++){
  			if(str[i] == bracketsConfig[j][0]) count++;
  			else if(str[i] == bracketsConfig[j][1]) count --;
  		}
  	}
  	return count == 0 ? true : false;
}
