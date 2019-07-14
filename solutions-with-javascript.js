function validParentheses(parens){
  let set = [];
  for(pr of parens) {
    if(pr == '(') {
      set.push(pr);
    }
    else if(pr == ')') {
      if(set.length === 0 || !set.includes('(')) return false;
      set.pop();    }
  }
  return set.length === 0;
}


function validParentheses(parens){
  let set = [];
  for(pr of parens) {
    if(pr == '(') {
      set.push(pr);
    }
    else if(pr == ')') {
      if(set.length === 0 || !set.includes('(')) return false;
      set.pop();    }
  }
  return set.length === 0;
}


function isTriangle(a,b,c) {
  if(!a || !b || !c) return false;
  numbers = [a,b,c];
  sum = a + b + c;
  sub = 0 - a - b - c;
  for(number of numbers) {
    const firstCheck = number < sum - number ? true : false;
    const secondCheck = number > sub + number ? true : false;
    if(!firstCheck || !secondCheck) return false
  }
  return true;
}

function nbYear(p0, percent, aug, p) {
  let result = 0;
  while(p0 < p) {
    p0 = p0 + p0 * (percent / 100) + aug;
    result++;
  }
  return result;
}

function DNAStrand(dna){
  dna = dna.split("");
  let result = '';
  for(d of dna) {
    if (d == 'A') result += 'T';
    else if (d == 'T') result += 'A';
    else if (d == 'G') result += 'C';
    else result += 'G';
  }
  return result;
}


function createPhoneNumber(numbers){
  // * (123) 456-7890
  if(numbers.length < 10) return false;
  else {
    let phs = '';
    let t = '';
    let f = '';
    numbers.forEach(function (number, index) {
      if (number < 0 || number > 9) return false;
      if(index < 3) phs += number;
      else if(index < 6) t += number;
      else f += number;
    });
    return `(${phs}) ${t}-${f}`;
  }
}


function likes(names) {
  let str_likes = "likes this";
  if(names.length == 0) return `no one ${str_likes}`;
  else if(names.length == 1) return `${names[0]} ${str_likes}`;
  else if(names.length == 2) return `${names[0]} and ${names[1]} like this`;
  else if(names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else {
    const others = names.length - 2;
    return `${names[0]}, ${names[1]} and ${others} others like this`;
  }
}