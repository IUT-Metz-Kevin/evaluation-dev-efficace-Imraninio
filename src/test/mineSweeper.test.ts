import { assertEquals } from "jsr:@std/assert";


function mineSwepper(ms: string): string{
    if(ms === '.'){
        return '0';
    }
    return '';
}


Deno.test({ name: "test simple avec une ligne", fn(){
        assertEquals(mineSwepper('.'), '0')
    }
    
})