
{
    function foo () { return 1 }
    console.assert(foo() === 1 , ' =1')
    {
        function foo () { return 2 }
        console.log ( foo() === 1 ? "" :  "inner block foo != 1" ); 
    }
    console.assert(foo() === 1 , ' =1')
}

// console.dir(console);
