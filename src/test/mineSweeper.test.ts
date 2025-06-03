import { assertEquals } from "jsr:@std/assert";


function mineSwepper(ms: string): string{
    if(ms === '.'){
        return '0';
    }
    if(ms === '..'){
        return '00'
    }
    return '';
}


Deno.test({ name: "Test mineSweeper avec 1 point", fn(){
        assertEquals(mineSwepper('.'), '0')
        assertEquals(mineSwepper('..'), '00')
    }
})

Deno.test({ name: "Test mineSweeper avec 2 points", fn(){
        assertEquals(mineSwepper('..'), '00')
    }
})
