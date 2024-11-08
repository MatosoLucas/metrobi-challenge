function isBalanced(str) {
  if (str.length % 2 !== 0) return false;

  const stack = [];
  const matchingBrackets = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  for (const char of str) {
    if (['{', '(', '['].includes(char)) {
      stack.push(char);
    } else if (['}', ')', ']'].includes(char)) {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log("{[}", isBalanced("{[}"));
console.log("{[]}", isBalanced("{[]}"));
console.log("{(])}", isBalanced("{(])}"));
console.log("{([])}", isBalanced("{([])}"));
console.log("{([)]}", isBalanced("{([)]}"));
console.log("{[([])]}", isBalanced("{[([])]}"));