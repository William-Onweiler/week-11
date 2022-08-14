    window.addEventListener('DOMContentLoaded', () => {
        const tiles = Array.from(document.querySelectorAll('.tile'));
        const playerDisplay = Document.querySlector('.display-player');
        const resetButton = Document.querySlector('.#reset');
        const announcer = document.querySelector('.announcer');
    resetButton.addEventListener('click', resetBoard)


    }); 
    
    let board =[
        ['X','X','X']
        ['O','X','O']
        ['O','O','X']
    ];
    let player1 = 'X'
    let player2 = 'O'
    function setup(){
        createCanvas(400,400);
    }
            function draw(){
                background(220);
                for(let i = 0; i < 3; i++){

                } for( let j = 0; j < 3; j++) {
                    let x = w * i;
                    let y = h * j;
                    let spot = board[i][j];
                    text(spot, x, y);
                }
            }