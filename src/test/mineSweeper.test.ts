import { assertEquals } from "jsr:@std/assert";

// en effet, j'ai fait un sacré changement entre ce commit et le précédent (je n'ai pas réussi à faire mieux)
function mineSwepper(ms: string): string{
    const tabMineSwepper = ms.split('\n');
    let mineSweeperStr = "";
    for(let i = 0; i < tabMineSwepper.length; i++){
        for(let j = 0; j < tabMineSwepper[i].length + 1; j++){                          
            let nbBombesAutour = 0;
                if(tabMineSwepper[i][j] === '.'){
                    for(let k = 0; k < j+2; k++){
                        if(tabMineSwepper[i][k] === "*"){
                            nbBombesAutour++;
                        }

                        if(i<tabMineSwepper.length-1){
                            if(tabMineSwepper[i+1][k] === "*"){
                                nbBombesAutour++;
                            }
                        }

                        if(i>0){
                            if(tabMineSwepper[i-1][k] === "*"){
                                nbBombesAutour++;
                            }
                        }
                    }
                    mineSweeperStr+= nbBombesAutour.toString()
            }
            else if(tabMineSwepper[i][j] === '*'){
                mineSweeperStr += '*'
            }
        }
        if(tabMineSwepper.length > 1 && tabMineSwepper.length-1 > i){
            mineSweeperStr += '\n';
        }
    }
    return mineSweeperStr;
}

mineSwepper("**\n*.")
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

Deno.test({ name: "Test mineSweeper avec 2 tabMineSwepper[i]s", fn(){
        assertEquals(mineSwepper(".\n."), "0\n0")
    }
})

Deno.test({ name: "Test mineSweeper avec 2 tabMineSwepper[i]s", fn(){
        assertEquals(mineSwepper("**\n*."), "**\n*3")
    }
})

/*      
* *     0,0   0,1

* 3     1,0   1,1
*/  
