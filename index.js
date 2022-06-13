// code your solution here
function superbowlWin(arr) {
    const found = arr.find(arr => arr.result ==="W")
    return found ? found.year : undefined ;
}