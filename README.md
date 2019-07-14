## Codewars Solutions

### Unique In Order

```python
  def unique_in_order(iterable):
      res = []
      lastAppend = ''
      for item in iterable:
          if item not in res:
              res.append(item)
              lastAppend = item
          else:
              if item != lastAppend:
                  res.append(item)
                  lastAppend = item
      return res
```

### Valid Parentheses

```javascript
function validParentheses(parens) {
  let set = [];
  for (pr of parens) {
    if (pr == "(") {
      set.push(pr);
    } else if (pr == ")") {
      if (set.length === 0 || !set.includes("(")) return false;
      set.pop();
    }
  }
  return set.length === 0;
}
```

### Are they the "same"?

```javascript
const comp = (a1, a2) => {
  if (!a1 || !a2 || a1.length !== a2.length) return false;
  return (
    a1
      .map(x => x * x)
      .sort()
      .toString() === a2.sort().toString()
  );
};
```

### Find the unique number

```python
  def find_uniq(arr):
    if len(arr) < 3:
        return False
    min_val = min(arr)
    max_val = max(arr)
    arr_sum = sum(arr)
    value = 0
    val1 = arr[0]
    val2 = arr[1]
    val3 = arr[2]
    if val1 == val2 or val2 == val3:
        value = val2
    elif val1 == val3:
        value = val1
    if value == 0:
        return arr_sum
    if value == min_val:
        return max_val
    else:
        return min_val
```

### Valid Braces

```python
  def validBraces(string):
  set = []
  for ch in string:
    if ch == '{' or ch == '[' or ch == '(':
      set.append(ch)
    elif ch == ']':
      if len(set) == 0 or '[' not in set:
        return False
      set.pop()
    elif ch == ')':
      if len(set) == 0 or '(' not in set:
        return False
      set.pop()
    elif ch == '}':
      if len(set) == 0 or '{' not in set:
        return False
      set.pop()

  return len(set) == 0
```

### Replace With Alphabet Position

```python
  def alphabet_position(text):
  result = ''
  for letter in text:
    pos = ord(letter.upper()) - 64
    if pos <= 0:
      continue
    result = result + '{} '.format(pos)
  return result.strip()
```

### Take a Ten Minute Walk

```python
  def isValidWalk(walk):
    x, y = 0, 0
    time = 0
    for step in walk:
        if time > 10:
            return False
        time = time + 1
        if step == 'n':
            y += 1
        elif step == 's':
            y -= 1
        elif step == 'w':
            x -= 1
        elif step == 'e':
            x += 1
        else:
            return False
    if time < 10:
        return False
    if x == 0 and y == 0:
        return True
    else:
        return False
```

### Is this a triangle?

```javascript
function isTriangle(a, b, c) {
  if (!a || !b || !c) return false;
  numbers = [a, b, c];
  sum = a + b + c;
  sub = 0 - a - b - c;
  for (number of numbers) {
    const firstCheck = number < sum - number ? true : false;
    const secondCheck = number > sub + number ? true : false;
    if (!firstCheck || !secondCheck) return false;
  }
  return true;
}
console.log(isTriangle(7, 2, 2));
```

### Growth of a Population

```javascript
function nbYear(p0, percent, aug, p) {
  let result = 0;
  while (p0 < p) {
    p0 = p0 + p0 * (percent / 100) + aug;
    result++;
  }
  return result;
}
```

### Complementary DNA

```javascript
function DNAStrand(dna) {
  dna = dna.split("");
  let result = "";
  for (d of dna) {
    if (d == "A") result += "T";
    else if (d == "T") result += "A";
    else if (d == "G") result += "C";
    else result += "G";
  }
  return result;
}
```

### Highest and Lowest

```python
  def high_and_low(numbers):
      list_numbers = numbers.split(" ")
      list_numbers = list(filter(None,list_numbers))
      list_numbers = list(map(int,list_numbers))
      list_numbers.sort()

      return str(list_numbers[-1]) + " " + str(list_numbers[0])
  print(high_and_low(" -3 -9  1 4 5 6 7"))
```

### Create Phone Number

```javascript
function createPhoneNumber(numbers) {
  // * (123) 456-7890
  if (numbers.length < 10) return false;
  else {
    let phs = "";
    let t = "";
    let f = "";
    numbers.forEach(function(number, index) {
      if (number < 0 || number > 9) return false;
      if (index < 3) phs += number;
      else if (index < 6) t += number;
      else f += number;
    });
    return `(${phs}) ${t}-${f}`;
  }
}
```

### Who likes it?

```javascript
function likes(names) {
  let str_likes = "likes this";
  if (names.length == 0) return `no one ${str_likes}`;
  else if (names.length == 1) return `${names[0]} ${str_likes}`;
  else if (names.length == 2) return `${names[0]} and ${names[1]} like this`;
  else if (names.length == 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else {
    const others = names.length - 2;
    return `${names[0]}, ${names[1]} and ${others} others like this`;
  }
}
```

### Count the Digit

```python 
def nb_dig(n, d):
    count = 0
    #limit control for n
    if n < 0:
        return False
    
    # limit control for d
    elif d < 0 and d > 9:
        return False
        
    # now for loop between 0 to n
    # range(0,n+1) cause range() functions second argument is not included 
    # if you want to include n you should input to n + 1
    for x in range(0, n+1):
        # now we can square to x
        # and convert it to string (i converted for simplicity)
        s_sqr = str(x**2)
        for s in s_sqr:
            # if any digit in square of x equals to d 
            # then count++
            if s == str(d):
                count += 1
    return count
```


