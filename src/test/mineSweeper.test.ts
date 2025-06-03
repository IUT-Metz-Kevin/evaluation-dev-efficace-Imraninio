import { assertEquals } from "jsr:@std/assert";


function mineSwepper(ms: string): string{
    let mineSweeperStr = '';
    for(let i = 0; i < ms.length + 1; i++){
        if(ms[i] === '.'){
            if(i != 0){
                if(ms[i-1] === "*" && ms[i+1] === "*"){
                    mineSweeperStr += '2';
                }
                else if(ms[i-1] === '*'){
                    mineSweeperStr += '1';    
                }
                else{
                    mineSweeperStr += '0';
                }
            }
            else if(i+1 < ms.length ){
                if(ms[i+1] === '*'){
                    mineSweeperStr += '1';    
                }
                else{
                    mineSweeperStr += '0';
                }
            }
            else if(ms[i+1] === '*'){
                mineSweeperStr += '1'; 
            }
            else{
                mineSweeperStr += '0';
            }
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

Deno.test({ name: "Test mineSweeper avec 6 mines", fn(){
        assertEquals(mineSwepper('******'), '******')
    }
})

Deno.test({ name: "Test mineSweeper avec 1 mine et 1 point", fn(){
        assertEquals(mineSwepper('*.'), '*1')
    }
})

Deno.test({ name: "Test mineSweeper avec 1 premier point suivi d'une mine", fn(){
        assertEquals(mineSwepper('.*'), '1*')
    }
})

Deno.test({ name: "Test mineSweeper avec 2 mines et 1 point", fn(){
        assertEquals(mineSwepper('*.*'), '*2*')
    }
})


