import { assertEquals } from "jsr:@std/assert";


function mineSwepper(ms: string): string{
    if(ms === '.'){
        return '0';
    }
    return '';
}


Deno.test({ name: "Test mineSweeper", fn(){
        assertEquals(mineSwepper('.'), '0')
        assertEquals(mineSwepper('..'), '00')
    }
    
})
