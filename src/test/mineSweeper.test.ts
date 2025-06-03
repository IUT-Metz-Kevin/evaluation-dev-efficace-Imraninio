import { assertEquals } from "jsr:@std/assert";

function mineSwepper(ms: string): string{
    // tableau de chaine où chaque chaine est une ligne du mineSwepper
    const tabMineSwepper = ms.split('\n');
    let mineSweeperStr = "";
    // boucle sur chaque ligne
    for(let i = 0; i < tabMineSwepper.length; i++){
        // boucle sur chaque index de la ligne actuelle
        for(let j = 0; j < tabMineSwepper[i].length + 1; j++){                          
            let nbBombesAutour = 0;
            if(tabMineSwepper[i][j] === '.'){
                for(let k = -1; k < 2; k++){
                    // ligne actuelle
                    if(tabMineSwepper[i][j+k] === "*"){
                        nbBombesAutour++;
                    }
                    // ligne du dessous
                    if(i<tabMineSwepper.length-1){
                        if(tabMineSwepper[i+1][j+k] === "*"){
                            nbBombesAutour++;
                        }
                    }
                    // ligne du dessus
                    if(i>0){
                        if(tabMineSwepper[i-1][j+k] === "*"){
                            nbBombesAutour++;
                        }
                    }
                }
                // ajout du nombre de bombes autour
                mineSweeperStr+= nbBombesAutour.toString()
            }
            // ajout de la bombe
            else if(tabMineSwepper[i][j] === '*'){
                mineSweeperStr += '*'
            }
        }
        // séparer chaque ligne
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

Deno.test({ name: "Test mineSweeper avec 2 lignes", fn(){
        assertEquals(mineSwepper(".\n."), "0\n0")
    }
})

Deno.test({ name: "Test mineSweeper avec 3 bombes", fn(){
        assertEquals(mineSwepper("**\n*."), "**\n*3")
    }
})
 
Deno.test({ name: "Test mineSweeper avec plusieurs lignes et plusieurs bombes", fn(){
        assertEquals(mineSwepper(".*.**.\n....*.\n..*..."), "1*2**2\n1234*2\n01*211")
    }
})

