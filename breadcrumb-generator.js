
/**
 *
 * @param {String} url
 * @param {String} seperator
 */
function generateBC(url, seperator) {
  const paths = prepPaths(url);
  const result = ['<a href="/">HOME</a>'];

  if (paths.length === 0
    || (paths.length === 1 && paths[0].startsWith('index.'))
    || (paths.length === 1 && paths[0].length === 0)) {
    result[0] = '<span class="active">HOME</span>';
    return result.join(seperator);
  }

  let curPath = '/';
  for (let i = 0; i < paths.length; ++i) {
    if (paths[i].startsWith('index.')) continue;
    if (i === paths.length - 1 || paths[i + 1].startsWith('index.')) {
      // put span
      if (paths[i].includes('.')) {
        paths[i] = paths[i].slice(0, paths[i].indexOf('.'));
      }
      result.push(`<span class="active">${strShorter(paths[i])}</span>`);
    } else {
      // put a
      result.push(`<a href="${curPath}${paths[i]}/">${strShorter(paths[i])}</a>`);
    }
    curPath = `${curPath}${paths[i]}/`;
  }
  return result.join(seperator);
}

/**
 *
 * @param {String} url
 */
function prepPaths(url) {
  if (url.startsWith('https://') || url.startsWith('http://')) {
    const end = url.indexOf('//');
    url = url.slice(end + 2, url.length);
    console.log(url);
  }

  const paths = url.split('/');
  paths.shift();

  console.log('BEFORE ' + paths);
  for (let i = 0; i < paths.length; ++i) {
    let path = paths[i];

    if (path.includes('#')) {
      path = path.slice(0, path.indexOf('#'));
    }
    if (path.includes('?')) {
      path = path.slice(0, path.indexOf('?'));
    }
    paths[i] = path;
  }
  console.log('NEW ' + paths);
  return paths;
}

/**
 *
 * @param {String} str
 */
function strShorter(str) {
  const ignore = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"];
  const words = str.split('-');

  if (str.length > 30) return words.filter(word => !(ignore.includes(word))).map(word => word[0].toUpperCase()).join('');
  return words.join(' ').toUpperCase().trim();
}

console.log(generateBC('linkedin.it/bioengineering-by-for-research/app/users?order=desc&filter=adult', ' . '));
console.log(generateBC('facebook.fr/the-at-insider-bed-skin-surfer/biotechnology-paper-and-kamehameha/index.php#people', ' ; '));
console.log(generateBC('github.com/app/games/research-with-the-transmutation-by-at-or-in-a-with#offers?hack=off', ' ; '))