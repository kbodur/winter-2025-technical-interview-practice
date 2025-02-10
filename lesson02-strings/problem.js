/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {

  let maxLength = 0;
  let currentSubstring = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!currentSubstring.includes(char)) {
      currentSubstring += char;
      maxLength = Math.max(maxLength, currentSubstring.length);
    } else {
      currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char) + 1) + char;
    }
  }

  return maxLength;
}


module.exports = lengthOfLongestSubstring;
