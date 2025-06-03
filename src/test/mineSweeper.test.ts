import { assertEquals } from "jsr:@std/assert";


function mineSwepper(ms: string): string{
    let tabMineSwepper = ms.split('\n');
    let mineSweeperStr = "";
    for(let i = 0; i < tabMineSwepper.length; i++){
        for(let j = 0; j < tabMineSwepper[i].length + 1; j++){
                if(tabMineSwepper[i][j] === '.'){
                    if(j != 0){
                        if(tabMineSwepper[i][j-1] === "*" && tabMineSwepper[i][j+1] === "*"){
                            mineSweeperStr += '2';
                        }
                        else if(tabMineSwepper[i][j-1] === '*'){
                            mineSweeperStr += '1';    
                        }
                        else{
                            mineSweeperStr += '0';
                        }
                    }
                    else if(j+1 < tabMineSwepper[i].length ){
                        if(tabMineSwepper[i][j+1] === '*'){
                            mineSweeperStr += '1';    
                        }
                        else{
                            mineSweeperStr += '0';
                        }
                    }
                else if(tabMineSwepper[i][j+1] === '*'){
                    mineSweeperStr += '1';
                }
                else{
                    mineSweeperStr += '0'
                }

            }
            else if(tabMineSwepper[i][j] === '*'){
                mineSweeperStr += '*'
            }
        }
        if(tabMineSwepper.length > 1 && i < tabMineSwepper.length - 1){
            mineSweeperStr += '\n'    
        }
    }
    return mineSweeperStr;
}

console.log(mineSwepper(".\n."))

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

Deno.test({ name: "Test mineSweeper avec 2 lignes", fn(){
        assertEquals(mineSwepper(".\n."), "0\n0")
    }
})


