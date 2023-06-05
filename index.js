/*
Question-1:- Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/
function moveZeroesEnd(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }
  while (count < nums.length) {
    nums[count] = 0;
    count++;
  }
  return nums;
}
const nums1 = [0, 1, 0, 3, 12];
console.log(moveZeroesEnd(nums1));

/*
Question-2:- First Unique Character in a String
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/
function uniqueChar(s) {
  const obj = new Map();
  const string = s.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const value = obj.get(char) || 0;
    obj.set(char, value + 1);
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (obj.get(char) === 1) {
      return i;
    }
  }

  return -1;
}

console.log(uniqueChar("leetcodel"));

// -------------------------------- 😊 ----------------------------------------