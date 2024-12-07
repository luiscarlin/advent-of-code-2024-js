import { log } from 'node:console';
import fs from 'node:fs';

function part1() {
  const lines = fs.readFileSync('./day07/file.in', 'utf8').trim().split('\n');

  // find if there is an equation combination that is valid
  const isEquationValid = (result, nums) => {
    // accumulate final result in nums[0]
    if (nums.length === 1) {
      // if the result is the same as the first number, then it's valid
      return result === nums[0];
    }

    // more than 1 number, so reduce the array

    // reduce by adding the first two numbers
    const addedNums = [nums[0] + nums[1]].concat(nums.slice(2));
    if (isEquationValid(result, addedNums)) {
      return true;
    }

    // reduce by multiplying the first two numbers
    const multipliedNums = [nums[0] * nums[1]].concat(nums.slice(2));
    if (isEquationValid(result, multipliedNums)) {
      return true;
    }

    return false;
  };

  let total = 0;

  for (const line of lines) {
    let [result, nums] = line.split(': ');

    result = Number(result);
    nums = nums.split(' ').map(Number);

    if (isEquationValid(result, nums)) {
      total += result;
    }
  }

  log('part 1', total);
}

function part2() {
  const lines = fs.readFileSync('./day07/file.in', 'utf8').trim().split('\n');

  // find if there is an equation combination that is valid
  const isEquationValid = (result, nums) => {
    // accumulate final result in nums[0]
    if (nums.length === 1) {
      // if the result is the same as the first number, then it's valid
      return result === nums[0];
    }

    // more than 1 number, so reduce the array

    // reduce by adding the first two numbers
    const addedNums = [nums[0] + nums[1]].concat(nums.slice(2));
    if (isEquationValid(result, addedNums)) {
      return true;
    }

    // reduce by multiplying the first two numbers
    const multipliedNums = [nums[0] * nums[1]].concat(nums.slice(2));
    if (isEquationValid(result, multipliedNums)) {
      return true;
    }

    // reduce by concatenating the first two numbers
    const concatenatedNums = [Number(`${nums[0]}${nums[1]}`)].concat(
      nums.slice(2),
    );
    if (isEquationValid(result, concatenatedNums)) {
      return true;
    }

    return false;
  };

  let total = 0;

  for (const line of lines) {
    let [result, nums] = line.split(': ');

    result = Number(result);
    nums = nums.split(' ').map(Number);

    if (isEquationValid(result, nums)) {
      total += result;
    }
  }

  log('part 2', total);
}

part1();
part2();
