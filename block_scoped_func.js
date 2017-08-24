
{
    function foo () { return 1 }
    assert(foo() === 1 , ' =1')
    {
        function foo () { return 2 }
        assert ( foo() === 2 ,' =2'); 
    }
    assert(foo() === 1 , ' =1')
}

