


document.querySelector('.jeu').innerHTML='';
const main = document.querySelector('.jeu');

const multiline = 
`***********.*
*S.....**.*.T
*****.....*.*
*****.***.*.*
*****.*****.*
*****.*****.*
*****.......*
*****.*******
*.........***
*.******...**
*....********`




const multiline2 = 
`********
****S***
****.***
****.***
****.***
*......*
*.****.*
*..***.*
*..***.*
**.*****
*T.*****
********`

//let arr=[multiline,multiline1,multiline2]


//============================ Conteneur ===================================//

const labyrinthe = document.createElement('div')
labyrinthe.className = "labyrinthe";
main.appendChild(labyrinthe);

const player = document.createElement('div');
player.className = 'joueur';
//=========================== creation du labyrinthe ========================//
afficheGrille(multiline)
function afficheGrille(multiline)
{

    for (let i = 0; i < multiline.length; i++) {

        if(multiline[i].split('') =='*') {

        const walls = document.createElement('div');
        walls.className = 'murs tile';
        labyrinthe.appendChild(walls);
        } 
        else if (multiline[i].split('') =='.') {

        const paths = document.createElement('div');
        paths.className = 'chemins tile';
        labyrinthe.appendChild(paths);

        }
        else if (multiline[i].split('') =='S') {

            const start = document.createElement('div');
            start.className = 'start tile';
            labyrinthe.appendChild(start);

        } else if (multiline[i].split('') =='T') {

            const end = document.createElement('div');
            end.className = 'end tile';
            labyrinthe.appendChild(end);

            const treasure = document.createElement('div');
            treasure.className = 'tresor';

            end.appendChild(treasure);
        }


    }

}

/**
 * Fonction pour manipuler les mouvement du jeueur
 */






function movetop() {
    let play = playerpos - 13
    if (document.querySelector("body > main > div div:nth-child(" + play + ")").classList.contains('chemins')) {
        playerpos = play

        document.querySelector("body > main > div div:nth-child(" + playerpos + ")").appendChild(player)
    } else {
        console.log('il y a un mur');
        alert('Il y a un mur')
    }
}

function moveright() {
    let play = playerpos + 1
    
    if ((document.querySelector("body > main > div div:nth-child(" + play + ")").classList.contains('chemins'))||(document.querySelector("body > main > div div:nth-child(" + play + ")").classList.contains('end'))) {
        playerpos++

        document.querySelector("body > main > div div:nth-child(" + playerpos + ")").appendChild(player)
        if (playerpos == 26) {
            alert('You are the winner!!')
            const level = document.createElement('script')

            level.src = 'maze1.js'
            main.appendChild(level)
            }
    } else {
        console.log('il y a un mur');
        alert('Il y a un mur')
    }
  
}

function moveleft() {
    let play = playerpos - 1
    if ((document.querySelector("body > main > div div:nth-child(" + play + ")").classList.contains('chemins'))||(document.querySelector("body > main > div div:nth-child(" + play + ")").classList.contains('start'))) {
        playerpos--

        document.querySelector("body > main > div div:nth-child(" + playerpos + ")").appendChild(player)
    } else {
        console.log('il y a un mur');
        alert('Il y a un mur')
    }
}

function movebottom() {
    let play = playerpos + 13
    if (document.querySelector("body > main > div div:nth-child(" + play + ")").classList.contains('chemins')) {
        playerpos = playerpos + 13

        document.querySelector("body > main > div div:nth-child(" + playerpos + ")").appendChild(player)
    } else {
        alert('Il y a un mur');
    }
}
//========================= Conditions mouvements ======================//
document.querySelector("body > main > div > div.start").appendChild(player)
let playerpos = 15

document.body.addEventListener('keyup', function (e) {

    if (e.key == 'ArrowUp') {
        movetop()
    }
    if (e.key == 'ArrowRight') {
        moveright()
        
    }
    if (e.key == 'ArrowLeft') {
        moveleft()
    }
    if (e.key == 'ArrowDown') {
        movebottom()
    }
    
})








