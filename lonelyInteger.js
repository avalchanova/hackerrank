function lonelyinteger(a) {
    let unique = undefined;
    let stopIndex = a.length - 1;

    if (a.length < 0) {
        throw new Error('Invalid array length');
    }
    if (a.length === 1) {
        unique = a[0];
    }

    for (let i = 0; i <= stopIndex; i++) {
        for (let k = 0; k <= stopIndex; k++) {
            if (i !== k) {
                if (a[i] === a[k]) {
                    unique = undefined;
                    break;
                } else {
                    unique = a[i];
                    //   console.log(unique);
                }
            }
        }
        if (typeof unique === 'number') {
            break;
        }
    }
    console.log(unique);
    return unique;
}
lonelyinteger([1, 1, 2]);
