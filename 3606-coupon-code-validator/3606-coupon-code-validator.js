/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    let e = [], g = [], p = [], r = []
    for(let i=0;i<isActive.length;i++) {
        if(isActive[i] == false) continue
        let business = businessLine[i]
        if(!(["electronics", "grocery", "pharmacy", "restaurant"]).includes(business)) continue
        if(code[i].length == 0) continue
        let ok = true
        for(let val of code[i]) {
            if(!(/[a-zA-Z-0-9_]/.test(val))) {
                ok = false
                break
            }
        }
        if(!ok) continue
        if(business.startsWith('e')) e.push(code[i])
        if(business.startsWith('g')) g.push(code[i])
        if(business.startsWith('p')) p.push(code[i])
        if(business.startsWith('r')) r.push(code[i])
    }
    e.sort()
    g.sort()
    p.sort()
    r.sort()
    return [...e,...g,...p,...r]
};