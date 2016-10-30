evens=[0,2,4,6,8,10,12]

odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, j) => v + j)

console.log(nums);

let fives=[]

nums.forEach(v => {
   if (v % 5 === 0)
       fives.push(v)
})

console.log(fives);
