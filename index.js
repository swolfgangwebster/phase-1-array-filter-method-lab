// Code your solution here
function findMatching(a,s) {
    return a.filter(i => i.toLowerCase() == s.toLowerCase())
}
function fuzzyMatch(a,s) {
    return a.filter(i => i.slice(0, s.length) == s)
}

function matchName(a,s) {
    return a.filter(i => i.name == s)
}