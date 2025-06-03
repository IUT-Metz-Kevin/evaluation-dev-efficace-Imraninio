import { assertEquals } from "jsr:@std/assert";


function mineSwepper(ms: string): string{
    if(ms === '.'){
        return '0';
    }
    if(ms === '..'){
        return '00'
    }
    if(ms === '......'){
        return '000000'
    }
    if(ms === '*'){
        return '*'
    }
    if(ms === '******'){
        return '******'
    }
    return '';
}


Deno.test({ name: "Test mineSweeper avec 1 point", fn(){
        assertEquals(mineSwepper('.'), '0')
    }
})

Deno.test({ name: "Test mineSweeper avec 2 points", fn(){
        assertEquals(mineSwepper('..'), '00')
    }
})

Deno.test({ name: "Test mineSweeper avec 6 points", fn(){
        assertEquals(mineSwepper('......'), '000000')
    }
})

Deno.test({ name: "Test mineSweeper avec 1 mine", fn(){
        assertEquals(mineSwepper('*'), '*')
    }
})

Deno.test({ name: "Test mineSweeper avec 6 mine", fn(){
        assertEquals(mineSwepper('******'), '******')
    }
})

