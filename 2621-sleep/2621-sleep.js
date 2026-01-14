/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const a = await new Promise ((res,rej) =>{
        setTimeout(()=>{
            res (millis)
        },millis)
    })
    return a 
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */