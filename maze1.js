
alert('level2')

function level2() {
    jeu.innerHTML = ''




    const multiline = 
    `**********************
    *..S.................*
    ********************.*
    *....................*
    *.********************
    *...................T*`

//============================ Conteneur ===================================//

const labyrinthe1 = document.createElement('div')
labyrinthe1.className = "labyrinthe";
main.appendChild(labyrinthe);

const player = document.createElement('div');
player.className = 'joueur';
//=========================== creation du labyrinthe ========================//

function afficheGrille(multiline)
{

    for (let i = 0; i < multiline.length; i++) {

        if(multiline[i].split('') =='*') {

        const walls = document.createElement('div');
        walls.className = 'murs tile';
        labyrinthe1.appendChild(walls);
        } 
        else if (multiline[i].split('') =='.') {

        const paths = document.createElement('div');
        paths.className = 'chemins tile';
        labyrinthe1.appendChild(paths);

        }
        else if (multiline[i].split('') =='S') {

            const start = document.createElement('div');
            start.className = 'start tile';
            labyrinthe1.appendChild(start);

        } else if (multiline[i].split('') =='T') {

            const end = document.createElement('div');
            end.className = 'end tile';
            labyrinthe1.appendChild(end);

            const treasure = document.createElement('div');
            treasure.className = 'tresor';

            end.appendChild(treasure);
        }


    }

}
afficheGrille(multiline)







































