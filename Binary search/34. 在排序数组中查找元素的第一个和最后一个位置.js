// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
// 示例 1：
// ：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    console.log('nums', nums);
    let a = 0;
    let res = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == target) {
        a = i;
        map.set(a, nums[i]);
      }
    }
    for (let j = nums.length; j > 0; j--) {
      if (nums[j] == target) {
        z = j;
        map.set(z, nums[j]);
      }
    }
    map.forEach((v, k, m) => {
      res.push(k);
      console.log('k', k);
      console.log('v', v);
    });
    console.log(map);
    if (res.length == 0) {
      return [-1, -1];
    } else if(res.length==1){
      return [res[0],res[0]];
    }else{
      return [res[0],res[res.length-1]]
    }
  };
  
  console.log(searchRange([3,3,3],3));
  