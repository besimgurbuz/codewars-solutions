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

def alphabet_position(text):
  result = ''
  for letter in text:
    pos = ord(letter.upper()) - 64
    if pos <= 0:
      continue
    result = result + '{} '.format(pos)
  return result.strip()


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


def high_and_low(numbers):
    list_numbers = numbers.split(" ")
    list_numbers = list(filter(None,list_numbers))
    list_numbers = list(map(int,list_numbers))
    list_numbers.sort()

    return str(list_numbers[-1]) + " " + str(list_numbers[0])


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