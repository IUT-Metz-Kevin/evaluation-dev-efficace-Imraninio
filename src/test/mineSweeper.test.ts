import { assertEquals } from "jsr:@std/assert";


function mineSwepper(ms: string): string{
    const tabMineSwepper = ms.split('\n');
    let mineSweeperStr = "";
    let i = 1;
    for(const ligne of tabMineSwepper){
        for(let j = 0; j < ligne.length + 1; j++){
                if(ligne[j] === '.'){
                    if(j != 0){
                        if(ligne[j-1] === "*" && ligne[j+1] === "*"){
                            mineSweeperStr += '2';
                        }
                        else if(ligne[j-1] === '*'){
                            mineSweeperStr += '1';    
                        }
                        else{
                            mineSweeperStr += '0';
                        }
                    }
                    else if(j+1 < ligne.length ){
                        if(ligne[j+1] === '*'){
                            mineSweeperStr += '1';    
                        }
                        else{
                            mineSweeperStr += '0';
                        }
                    }
                else if(ligne[j+1] === '*'){
                    mineSweeperStr += '1';
                }
                else{
                    mineSweeperStr += '0'
                }

            }
            else if(ligne[j] === '*'){
                mineSweeperStr += '*'
            }
        }
        console.log(tabMineSwepper.length, i)
        if(tabMineSwepper.length > 1 && tabMineSwepper.length > i){
            mineSweeperStr += '\n';
        }
        i++;
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

Deno.test({ name: "Test mineSweeper avec 2 lignes", fn(){
        assertEquals(mineSwepper(".\n."), "0\n0")
    }
})


