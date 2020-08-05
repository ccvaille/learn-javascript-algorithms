/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  let stack = [];
  if (len % 2 === 1) {
    return false;
  }
  for (let i = 0; i < len; i++) {
    const c = s[i];
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];
      if ((t === '(' && c === ')') || (t === '[' && c === ']') || (t === '{' && c === '}')) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
