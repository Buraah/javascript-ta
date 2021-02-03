// complete the function
function palindrom(str) {
  // code goes here
<<<<<<< HEAD
  var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i< len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
         return false;
        }
    }
    return true;
  }
  palindrome("Taco cat");
=======
}
>>>>>>> 52c421f35aa843b3271f9327805ecb119faa757e

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
