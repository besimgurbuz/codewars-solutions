const ignoredWords = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"];

function generateBC(url, separator) {
  let urlArray = url.split('/');

  urlArray.shift();
  urlArray = urlArray.filter(text => !text.includes('index'));
  urlArray = urlArray.map(text => {
    if (text.includes('?') || text.includes('#')) {
      const index = text.indexOf('?') > -1 ? text.indexOf('?') : text.indexOf('#');
      text = text.slice(0, index);
    }
    if (text.includes('.')) {
      const index = text.indexOf('.');
      text = text.slice(0, index);
    }
    return text;
  });

  let result = `<a href="/">HOME</a> ${separator} `;;

  for (let i = 0; i < urlArray.length; i++) {
    if (i != urlArray.length - 1) {
      result += `<a href="${printPath(urlArray, i)}/">${similizeText(urlArray[i].toUpperCase())}</a>`;
      result += ` ${separator} `
    } else {
      result += `<span class="active">${similizeText(urlArray[i].toUpperCase())}</span>`
    }
  }
  return result;
}

function printPath(arr, index) {
  let result = '';
  for (let i = 0; i <= index; i++) {
    result += `/${arr[i]}`
  }
  return result;
}

function similizeText(text) {
  if (text.length > 30 && text.split('-').length > 0) {
    let longWordArr = text.split('-');
    let res = '';
    longWordArr.forEach(word => {
      if (!ignoredWords.includes(word)) {
        res += word.charAt(0).toUpperCase();
      }
    });
    return res;
  } else {
    return text;
  }
}

console.log(generateBC("mysite.com/pictures/holidays.html", " : "));
console.log(generateBC("www.codewars.com/users/GiacomoSorbi", " / "));
console.log(generateBC("www.microsoft.com/important/confidential/docs/index.htm#top", " * "));
console.log(generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp", " > "));
console.log(generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + "));