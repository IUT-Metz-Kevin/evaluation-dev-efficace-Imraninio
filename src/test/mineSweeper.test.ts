import { assertEquals } from "jsr:@std/assert";


function mineSwepper(ms: string): string{
    let mineSweeperStr = '';
    for(let i = 0; i < ms.length +1; i++){
        if(ms[i] === '.'){
            mineSweeperStr += '0'
        }
        else if(ms[i] === '*'){
            mineSweeperStr += '*'
        }
    }
    return mineSweeperStr;
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

