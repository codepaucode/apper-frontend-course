function transform(nums) {
    const sqrdArray = nums
        .map(num => num*num)
        .sort((a, b) => a - b)
        return sqrdArray
  }
  
  const nums = [10,9,5,3,8]
  const sortedSquaredNums = transform(nums)
  console.log(sortedSquaredNums) // [9,16,25,64,81]