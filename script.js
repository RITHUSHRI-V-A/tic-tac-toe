let clickcount = 1;
const writex = 'x';
const writeo = 'o';

const cells = document.querySelectorAll('.cell');

cells.forEach(Element => {
    Element.addEventListener('click', function(){

        if(this.classList.contains('clicked')){
            return;
        }

        if(clickcount%2===0){
            Element.textContent = writeo;
            $('#layout').removeClass('bluelayout').addClass('redlayout')
            cells.forEach(cell => cell.classList.replace('blueborder', 'cell'));
            $(this).addClass('bluecolor')
        }
        else{
            Element.textContent = writex;
            $('#layout').removeClass('redlayout').addClass('bluelayout')
            cells.forEach(cell => cell.classList.replace('cell','blueborder'));
            $(this).addClass('redcolor')
        }

        this.classList.add('clicked');
        clickcount++
        checkoverlay();
    });
    
});


const reset = document.getElementById('resetbutton');
reset.addEventListener('click', function(){
    window.location.reload();
});


function checkoverlay(){
    const cell1 = document.getElementById('cell1').textContent;
    const cell2 = document.getElementById('cell2').textContent;
    const cell3 = document.getElementById('cell3').textContent;
    const cell4 = document.getElementById('cell4').textContent;
    const cell5 = document.getElementById('cell5').textContent;
    const cell6 = document.getElementById('cell6').textContent;
    const cell7 = document.getElementById('cell7').textContent;
    const cell8 = document.getElementById('cell8').textContent;
    const cell9 = document.getElementById('cell9').textContent;


    if(cell1===cell2&&cell1===cell3&&cell1) {

        const overlay= document.getElementById('overlay');
        overlay.textContent= "player "+ cell1 + " wins";
        cells.forEach(cell => cell.classList.add('clicked'));
        if(cell1==='x')
            { overlay.style.color = 'red';
                overlay.style.textShadow='0 0 10px red'
            }        else if(cell1==='o')
                { overlay.style.color = 'blue';
                    overlay.style.textShadow='0 0 10px blue'
                }        overlay.style.display = 'flex';
        const resetdiv = document.getElementById("resetdiv");
        resetdiv.style.display='flex';
        reset.style.display = 'flex';

    }
    
    else if(cell4===cell5&&cell4===cell6&&cell4) {

        const overlay= document.getElementById('overlay');
        overlay.textContent= "player "+ cell4 + " wins";
        cells.forEach(cell => cell.classList.add('clicked'));
        if(cell4==='x')
            { overlay.style.color = 'red';
                overlay.style.textShadow='0 0 10px red'
            }        else if(cell4==='o')
                { overlay.style.color = 'blue';
                    overlay.style.textShadow='0 0 10px blue'
                }        overlay.style.display = 'flex';
        const resetdiv = document.getElementById("resetdiv");
        resetdiv.style.display='flex';
        reset.style.display = 'flex';

    }
    
    else if( cell7===cell8&&cell7===cell9&&cell7) {

        const overlay= document.getElementById('overlay');
        overlay.textContent= "player "+ cell7 + " wins";
        cells.forEach(cell => cell.classList.add('clicked'));
        if(cell7==='x')
            { overlay.style.color = 'red';
                overlay.style.textShadow='0 0 10px red'
            }        else if(cell7==='o')
                { overlay.style.color = 'blue';
                    overlay.style.textShadow='0 0 10px blue'
                }        overlay.style.display = 'flex';
        const resetdiv = document.getElementById("resetdiv");
        resetdiv.style.display='flex';
        reset.style.display = 'flex';

    }

    else if( cell1===cell4&&cell1===cell7&&cell1) {

        const overlay= document.getElementById('overlay');
        overlay.textContent= "player "+ cell1 + " wins";
        cells.forEach(cell => cell.classList.add('clicked'));
        if(cell1==='x')
        { overlay.style.color = 'red';
            overlay.style.textShadow='0 0 10px red'
        }
        else if(cell1==='o')
            { overlay.style.color = 'blue';
                overlay.style.textShadow='0 0 10px blue'
            }        overlay.style.display = 'flex';
        const resetdiv = document.getElementById("resetdiv");
        resetdiv.style.display='flex';
        reset.style.display = 'flex';

    }

    else if(cell2===cell5&&cell2===cell8&&cell2) {

        const overlay= document.getElementById('overlay');
        overlay.textContent= "player "+ cell2 + " wins";
        cells.forEach(cell => cell.classList.add('clicked'));
        if(cell2==='x')
            { overlay.style.color = 'red';
                overlay.style.textShadow='0 0 10px red'
            }        else if(cell2==='o')
                { overlay.style.color = 'blue';
                    overlay.style.textShadow='0 0 10px blue'
                }        overlay.style.display = 'flex';
        const resetdiv = document.getElementById("resetdiv");
        resetdiv.style.display='flex';
        reset.style.display = 'flex';

    }

    else if( cell3===cell6&&cell3===cell9&&cell3) {

        const overlay= document.getElementById('overlay');
        overlay.textContent= "player "+ cell3 + " wins";
        cells.forEach(cell => cell.classList.add('clicked'));
        if(cell3==='x')
            { overlay.style.color = 'red';
                overlay.style.textShadow='0 0 10px red'
            }        else if(cell3==='o')
                { overlay.style.color = 'blue';
                    overlay.style.textShadow='0 0 10px blue'
                }        overlay.style.display = 'flex';
        const resetdiv = document.getElementById("resetdiv");
        resetdiv.style.display='flex';
        reset.style.display = 'flex';

    }

    

    else if(  cell1===cell5&&cell1===cell9&&cell1) {

        const overlay= document.getElementById('overlay');
        overlay.textContent= "player "+ cell1 + " wins";
        cells.forEach(cell => cell.classList.add('clicked'));
        if(cell1==='x')
            { overlay.style.color = 'red';
                overlay.style.textShadow='0 0 10px red'
            }        else if(cell1==='o')
                { overlay.style.color = 'blue';
                    overlay.style.textShadow='0 0 10px blue'
                }        overlay.style.display = 'flex';
        const resetdiv = document.getElementById("resetdiv");
        resetdiv.style.display='flex';
        reset.style.display = 'flex';

    }

    else if(  cell3===cell5&&cell3===cell7&&cell3) {

        const overlay= document.getElementById('overlay');
        overlay.textContent= "player "+ cell3 + " wins";
        cells.forEach(cell => cell.classList.add('clicked'));
        if(cell3==='x')
            { overlay.style.color = 'red';
                overlay.style.textShadow='0 0 10px red'
            }        else if(cell3==='o')
                { overlay.style.color = 'blue';
                    overlay.style.textShadow='0 0 10px blue'
                }        overlay.style.display = 'flex';
        const resetdiv = document.getElementById("resetdiv");
        resetdiv.style.display='flex';
        reset.style.display = 'flex';

    }
    else if (clickcount==10){
        const overlay= document.getElementById('overlay');
        overlay.textContent= "Tied";
        cells.forEach(cell => cell.classList.add('clicked'));
        overlay.style.color='#7f48b6';
        overlay.style.textShadow="0 0 20px blue, 0 0 5px blue";
        overlay.style.display = 'flex';
        const resetdiv = document.getElementById("resetdiv");
        resetdiv.style.display='flex';
        reset.style.display = 'flex';

    }
  
}