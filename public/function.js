let fn = {
	// 1.生成一个范围内的随机数
	randomNumberInRange: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
	//2.对数组元素进行随机排序
	sortRandom: (arr) => arr.sort(() => Math.random() - 0.5),
	//3.字符串大写
	capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
	//4.数组去重
	uniqueValues: (arr) => [...new Set(arr)],
	//5.计算两个日期间的天数
	daysBetweenDates: (dateA, dateB) => {
		const timeDifference = Math.abs(dateA.getTime() - dateB.getTime())

		// Seconds * hours * miliseconds
		return Math.floor(timeDifference / (3600 * 24 * 1000))
	}

}
export default fn
//使用
		// 1.生成一个范围内的随机数
		// console.log(fn.randomNumberInRange(5,10));
		// 2.对数组元素进行随机排序
		// console.log(fn.sortRandom([1,3,5,11,8,4,7]));
		// 3.字符串大写
		// console.log(fn.capitalize('data'));
		// 4.数组去重
		// console.log(fn.uniqueValues([1,1,2,2,3,5,3,2]));
		//5计算两个日期间的天数 传入两个日期 需要 new Date('2022/7/26')
		// console.log(fn.daysBetweenDates(new Date('2022/7/26'),new Date('1998/05/23')));