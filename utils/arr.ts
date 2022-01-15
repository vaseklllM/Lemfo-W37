export default {
  /**
   * принимает: 5
   * возвращает: [1, 2, 3, 4, 5]
   * @param length длинна массива
   */
  getArrByLength: function (arrLength: number): number[] {
    let arr = []
    for (let i = 1; i <= arrLength; i++) {
      arr.push(i)
    }
    return arr
  },
}
