function stopWatch ()
{
    let counter = 0;
    return function()
    {
        counter++;
        return counter;
    }
}

// akta inter function ar man outer function a giye hit kore tokon take closuser bole.

// result 1,2,3, te je alda  alda man ditase ta ak ak ar result ak akta karo sathe karo mil nai.
// akta function ar vitor jodi ar akta function call koro ba return koro tahoel tara closuer make kore.

const result1 = stopWatch();
console.log(result1());

const result2 = stopWatch();
console.log(result2());

const result3 = stopWatch();
console.log(result3());