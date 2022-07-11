let a = ['abc', 'bef']
for ( let i=0; i<a.length; i++){
    let b = a[i].includes('b')
    if(b===true) console.log(i)
}