let inGame = false;
const startbutton = document.getElementById('placebet');
let boxClicked = 0;
/* Boxes */
const box1  = document.getElementById('box1');
const box2  = document.getElementById('box2');
const box3  = document.getElementById('box3');
const box4  = document.getElementById('box4');
const box5  = document.getElementById('box5');
const box6  = document.getElementById('box6');
const box7  = document.getElementById('box7');
const box8  = document.getElementById('box8');
const box9  = document.getElementById('box9');
const box10 = document.getElementById('box10');
const box11 = document.getElementById('box11');
const box12 = document.getElementById('box12');
const box13 = document.getElementById('box13');
const box14 = document.getElementById('box14');
const box15 = document.getElementById('box15');
const box16 = document.getElementById('box16');
const box17 = document.getElementById('box17');
const box18 = document.getElementById('box18');
const box19 = document.getElementById('box19');
const box20 = document.getElementById('box20');
const box21 = document.getElementById('box21');
const box22 = document.getElementById('box22');
const box23 = document.getElementById('box23');
const box24 = document.getElementById('box24');
const box25 = document.getElementById('box25');
let boxclickstatus ={
    box1clicked : false,
    box2clicked : false,
    box3clicked : false,
    box4clicked : false,
    box5clicked : false,
    box6clicked : false,
    box7clicked : false,
    box8clicked : false,
    box9clicked : false,
    box10clicked : false,
    box11clicked : false,
    box12clicked : false,
    box13clicked : false,
    box14clicked : false,
    box15clicked : false,
    box16clicked : false,
    box17clicked : false,
    box18clicked : false,
    box19clicked : false,
    box20clicked : false,
    box21clicked : false,
    box22clicked : false,
    box23clicked : false,
    box24clicked : false,
    box25clicked : false
}
let boxbombstatus ={
    box1bomb : false,    
    box2bomb : false,     
    box3bomb : false,     
    box4bomb : false,     
    box5bomb : false,     
    box6bomb : false,     
    box7bomb : false,     
    box8bomb : false,     
    box9bomb : false,     
    box10bomb : false,     
    box11bomb : false,     
    box12bomb : false,     
    box13bomb : false,     
    box14bomb : false,     
    box15bomb : false,     
    box16bomb : false,     
    box17bomb : false,     
    box18bomb : false,     
    box19bomb : false,     
    box20bomb : false,     
    box21bomb : false,     
    box22bomb : false,     
    box23bomb : false,     
    box24bomb : false,     
    box25bomb : false,
}
const img1 = document.getElementById('safeimg1');
const img2 = document.getElementById('safeimg2');
const img3 = document.getElementById('safeimg3');
const img4 = document.getElementById('safeimg4');
const img5 = document.getElementById('safeimg5');
const img6 = document.getElementById('safeimg6');
const img7 = document.getElementById('safeimg7');
const img8 = document.getElementById('safeimg8');
const img9 = document.getElementById('safeimg9');
const img10 = document.getElementById('safeimg10');
const img11 = document.getElementById('safeimg11');
const img12 = document.getElementById('safeimg12');
const img13 = document.getElementById('safeimg13');
const img14 = document.getElementById('safeimg14');
const img15 = document.getElementById('safeimg15');
const img16 = document.getElementById('safeimg16');
const img17 = document.getElementById('safeimg17');
const img18 = document.getElementById('safeimg18');
const img19 = document.getElementById('safeimg19');
const img20 = document.getElementById('safeimg20');
const img21 = document.getElementById('safeimg21');
const img22 = document.getElementById('safeimg22');
const img23 = document.getElementById('safeimg23');
const img24 = document.getElementById('safeimg24');
const img25 = document.getElementById('safeimg25');
const img = document.querySelectorAll('#bombcontainer img');
let minesamount = parseInt(document.querySelector('#mines input').value);
let betamount = parseInt(document.querySelector('#betamount input').value);
let balance = parseInt(document.getElementById('money').innerText.replace('Balance: ', '').replace('$', ''));
let allbox = document.querySelectorAll('.box');
let boximg={
    box1img: document.getElementById('safeimg1'),
    box2img: document.getElementById('safeimg2'),
    box3img: document.getElementById('safeimg3'),
    box4img: document.getElementById('safeimg4'),
    box5img: document.getElementById('safeimg5'),
    box6img: document.getElementById('safeimg6'),
    box7img: document.getElementById('safeimg7'),
    box8img: document.getElementById('safeimg8'),
    box9img: document.getElementById('safeimg9'),
    box10img: document.getElementById('safeimg10'),
    box11img: document.getElementById('safeimg11'),
    box12img: document.getElementById('safeimg12'),
    box13img: document.getElementById('safeimg13'),
    box14img: document.getElementById('safeimg14'),
    box15img: document.getElementById('safeimg15'),
    box16img: document.getElementById('safeimg16'),
    box17img: document.getElementById('safeimg17'),
    box18img: document.getElementById('safeimg18'),
    box19img: document.getElementById('safeimg19'),
    box20img: document.getElementById('safeimg20'),
    box21img: document.getElementById('safeimg21'),
    box22img: document.getElementById('safeimg22'),
    box23img: document.getElementById('safeimg23'),
    box24img: document.getElementById('safeimg24'),
    box25img: document.getElementById('safeimg25')
}
let alive = true;
const vineboom = document.getElementById('vineboom');
let multiplier = 0;
let balanceamount = 100;
const half = document.getElementById('half');
const double = document.getElementById('double');
const max = document.getElementById('max');
const onebombbtn = document.getElementById('onebomb')
const threebombbtn = document.getElementById('threebomb')
const fivebombbtn = document.getElementById('fivebomb')
const tenbombbtn = document.getElementById('tenbomb')
const fifteenbombbtn = document.getElementById('fifteenbomb')
const twentybombbtn = document.getElementById('twentybomb')


function start(){
    multiplierdisplay = document.getElementById('multiplierdisplay');
    earningamount = document.getElementById('earningamount');
    minesamount = parseInt(document.querySelector('#mines input').value);
    betamount = parseInt(document.querySelector('#betamount input').value);
    balance = document.getElementById('money');
    if (inGame===false){
        if (balanceamount!=0){
            if (betamount>balanceamount){
                betamount = balanceamount;
                document.querySelector('#betamount input').value = parseFloat(balanceamount.toFixed(2));
            } else if (betamount<0){
                betamount = 1;
                document.querySelector('#betamount input').value = 1;
            }
            balanceamount -= betamount;
            balance.innerText = `Balance: ${parseFloat(balanceamount.toFixed(2))}$`;
            alive=true;
            multiplier = 0;
            earningamount.value = 0;
            boxclickstatus ={
                box1clicked : false,
                box2clicked : false,
                box3clicked : false,
                box4clicked : false,
                box5clicked : false,
                box6clicked : false,
                box7clicked : false,
                box8clicked : false,
                box9clicked : false,
                box10clicked : false,
                box11clicked : false,
                box12clicked : false,
                box13clicked : false,
                box14clicked : false,
                box15clicked : false,
                box16clicked : false,
                box17clicked : false,
                box18clicked : false,
                box19clicked : false,
                box20clicked : false,
                box21clicked : false,
                box22clicked : false,
                box23clicked : false,
                box24clicked : false,
                box25clicked : false
            }
            boxbombstatus ={
                box1bomb : false,    
                box2bomb : false,     
                box3bomb : false,     
                box4bomb : false,     
                box5bomb : false,     
                box6bomb : false,     
                box7bomb : false,     
                box8bomb : false,     
                box9bomb : false,     
                box10bomb : false,     
                box11bomb : false,     
                box12bomb : false,     
                box13bomb : false,     
                box14bomb : false,     
                box15bomb : false,     
                box16bomb : false,     
                box17bomb : false,     
                box18bomb : false,     
                box19bomb : false,     
                box20bomb : false,     
                box21bomb : false,     
                box22bomb : false,     
                box23bomb : false,     
                box24bomb : false,     
                box25bomb : false,
            }
            /* mine amount check */
            if (minesamount>24){
                minesamount = 24;
                document.querySelector('#mines input').value = 24;
            } else if (minesamount<1){
                minesamount = 1;
                document.querySelector('#mines input').value = 1;
            }

            /* i spent like 40 mins trying to fix betamount error forgetting i added this shi
                bet amount check 
            if (betamount>balanceamount){
                betamount = balanceamount;
                document.querySelector('#betamount input').value = balanceamount;
            } else if (betamount<0){
                betamount = 1;
                document.querySelector('#betamount input').value = 1;
            }
            */

            document.querySelectorAll('input').forEach(input => {
                input.readOnly = true;
            });
            startbutton.innerText = 'Cash out';
            startbutton.style.filter = 'brightness(0.5)';
            startbutton.classList.remove('placebeteffect');
            allbox.forEach(box => {
                box.style.opacity = '1';
            });
            for (let key in boximg) {
                boximg[key].src = 'best.png';
                boximg[key].style.filter = 'hue-rotate(20deg) brightness(.5)';
                boximg[key].style.scale = '1';
            }
            inGame = true;
            createbomb();
        } else{
            startbutton.style.backgroundColor = 'red';
            startbutton.innerText = 'You have no money left.'
        }
    } else if (inGame===true && boxClicked>0){
        document.querySelectorAll('input').forEach(input => {
            input.readOnly = false;
        });
        allbox.forEach(box => {
            box.style.opacity = '0';
        });
        startbutton.innerText = 'Place bet';
        startbutton.style.filter = 'brightness(1)';
        startbutton.classList.add('placebeteffect');
        startbutton.style.border = 'none';
        startbutton.style.color = 'white';
        startbutton.style.backgroundColor = '#3757ff'
        inGame = false;
        boxClicked = 0;
        balanceamount += parseFloat(earningamount.value);
        balance.innerText = `Balance: ${parseFloat(balanceamount.toFixed(2))}$`;
        multiplierdisplay.textContent = 'Total earnings 0.00x';
    }
}

startbutton.addEventListener('click', start);


function click(clicked, bomb, clickedbox){
    if (inGame===true){
        if (boxclickstatus[clicked]===false){
            if (alive===true){
                if (boxbombstatus[bomb]===false){
                    startbutton.style.filter = 'brightness(1)';
                    startbutton.classList.add('placebeteffect');
                    boxclickstatus[clicked] = true;
                    boxClicked += 1;
                    clickedbox.style.opacity = '0';
                    // put the math here
                    //for 1-6 bombs
                    if (0<minesamount<7){
                        multiplier = (minesamount/6);
                        for(let i=0; i<boxClicked; i++){
                            multiplier *= ((minesamount/40) + (1+ (2*i/40)));
                        }
                        if (multiplier<1){
                            multiplier+=0.2
                            if (multiplier>1){
                                multiplier = 1;
                            }
                        }
                    //for 7-12 bombs
                    } else if (6<minesamount<13){
                        multiplier = (minesamount/5);
                        for(let i=0; i<click; i++){
                            multiplier *= ((minesamount/35) + (1+ (2*i/35)));
                        }
                        if (multiplier<1){
                            multiplier+=0.2
                            if (multiplier>1){
                                multiplier = 1;
                            }
                        }
                    //for 13-18bombs
                    } else if (12<minesamount<19){
                        multiplier = (minesamount/4);
                        for(let i=0; i<click; i++){
                            multiplier *= ((minesamount/30) + (1+ (2*i/30)));
                        }
                        if (multiplier<1){
                            multiplier+=0.2
                            if (multiplier>1){
                                multiplier = 1;
                            }
                        }
                    //for 19-24 bombs
                    } else if (18<minesamount<25){
                        multiplier = (minesamount/2);
                        for(let i=0; i<click; i++){
                            multiplier *= ((minesamount/25) + (1+ (2*i/25)));
                        }
                        if (multiplier<1){
                            multiplier+=0.2
                            if (multiplier>1){
                                multiplier = 1;
                            }
                        }
                    //idk why i added this honestly
                    } else{
                        console.log('error');
                    }

                    multiplier = parseFloat(multiplier.toFixed(2))
                    multiplierdisplay.textContent = `Total earnings ${multiplier}x`;
                    earningamount.value = betamount*multiplier;
                    earningamount.value = parseFloat(parseFloat(earningamount.value).toFixed(2));

                    //math end
                } else if(boxbombstatus[bomb]===true){
                    document.querySelectorAll('input').forEach(input => {
                        input.readOnly = false;
                    });
                    earningamount.readOnly = true;
                    const sound = new Audio('vineboom.mp3');
                    sound.play();
                    allbox.forEach(box => {
                        box.style.opacity = '0';
                    });
                    alive = false;
                    clicked = true;
                    startbutton.style.filter = 'brightness(1)';
                    startbutton.classList.add('placebeteffect');
                    startbutton.innerText = 'Place bet';
                    startbutton.style.filter = 'brightness(1)';
                    startbutton.classList.add('placebeteffect');
                    startbutton.style.border = 'none';
                    startbutton.style.color = 'white';
                    startbutton.style.backgroundColor = '#3757ff'
                    inGame = false;
                    boxClicked = 0;
                    multiplier = 0;
                    multiplierdisplay.textContent = 'Total earnings 0.00x';
                    earningamount.value = 0;
                }
            }
        }
    }
}

box1.addEventListener('click', () => {
    click('box1clicked', 'box1bomb', box1);
});

box2.addEventListener('click', () => {
    click('box2clicked', 'box2bomb', box2);
});

box3.addEventListener('click', () => {
    click('box3clicked', 'box3bomb', box3);
});

box4.addEventListener('click', () => {
    click('box4clicked', 'box4bomb', box4);
});

box5.addEventListener('click', () => {
    click('box5clicked', 'box5bomb', box5);
});

box6.addEventListener('click', () => {
    click('box6clicked', 'box6bomb', box6);
});

box7.addEventListener('click', () => {
    click('box7clicked', 'box7bomb', box7);
});

box8.addEventListener('click', () => {
    click('box8clicked', 'box8bomb', box8);
});

box9.addEventListener('click', () => {
    click('box9clicked', 'box9bomb', box9);
});

box10.addEventListener('click', () => {
    click('box10clicked', 'box10bomb', box10);
});

box11.addEventListener('click', () => {
    click('box11clicked', 'box11bomb', box11);
});

box12.addEventListener('click', () => {
    click('box12clicked', 'box12bomb', box12);
});

box13.addEventListener('click', () => {
    click('box13clicked', 'box13bomb', box13);
});

box14.addEventListener('click', () => {
    click('box14clicked', 'box14bomb', box14);
});

box15.addEventListener('click', () => {
    click('box15clicked', 'box15bomb', box15);
});

box16.addEventListener('click', () => {
    click('box16clicked', 'box16bomb', box16);
});

box17.addEventListener('click', () => {
    click('box17clicked', 'box17bomb', box17);
});

box18.addEventListener('click', () => {
    click('box18clicked', 'box18bomb', box18);
});

box19.addEventListener('click', () => {
    click('box19clicked', 'box19bomb', box19);
});

box20.addEventListener('click', () => {
    click('box20clicked', 'box20bomb', box20);
});

box21.addEventListener('click', () => {
    click('box21clicked', 'box21bomb', box21);
});

box22.addEventListener('click', () => {
    click('box22clicked', 'box22bomb', box22);
});

box23.addEventListener('click', () => {
    click('box23clicked', 'box23bomb', box23);
});

box24.addEventListener('click', () => {
    click('box24clicked', 'box24bomb', box24);
});

box25.addEventListener('click', () => {
    click('box25clicked', 'box25bomb', box25);
});


/* I SPENT 30 MINS TRYING TO FIX THIS FUCKING FUCTION
   I FORGOT I NAMED IT BOMB1 NOT BOX1 */


function createbomb() {
    let boxes = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13', 'b14', 'b15', 'b16', 'b17', 'b18', 'b19', 'b20', 'b21', 'b22', 'b23', 'b24', 'b25'];
    let minesamount = parseInt(document.querySelector('#mines input').value);
    let bombsbox = {};
    let bomb = [];

    for (let i = 1; i <= minesamount; i++) {
        let randomIndex = Math.floor(Math.random() * boxes.length);
        if (bomb.includes(randomIndex+1)===false){
            bombsbox[`randombox${i}`] = boxes[randomIndex];
            bomb.push(randomIndex+1);
            boxbombstatus[`box${randomIndex+1}bomb`] = true;
            boximg[`box${randomIndex+1}img`].src = 'boom.png';
            boximg[`box${randomIndex+1}img`].style.filter = 'brightness(1)';
            boximg[`box${randomIndex+1}img`].style.scale = '1.4';
        } else{
            i-=1
            randomIndex = Math.floor(Math.random() * boxes.length);
        }
    }
    console.log(bomb)
    console.log(bombsbox);
}

for(let c=0; c<5; c++){
  console.log(++c)  
};


function betbuttonclick(mult){
    if (mult==='max'){
        betamount = balanceamount;
        document.querySelector('#betamount input').value = parseFloat(balanceamount.toFixed(2));
        document.body.style.backgroundColor = 'red';
    } else{
        betamount *= mult;
        if (betamount>balanceamount){
            betamount = balanceamount;
            document.querySelector('#betamount input').value = parseFloat(balanceamount.toFixed(2));
        } else {
            document.querySelector('#betamount input').value = parseFloat(betamount.toFixed(2));
            document.body.style.backgroundColor = 'blue';
        }
    }
}

half.addEventListener('click', () => betbuttonclick(1/2));
double.addEventListener('click', () => betbuttonclick(2));
max.addEventListener('click', () => betbuttonclick('max'));

function minebuttonclick(min){
    minesamount = min;
    document.querySelector('#mines input').value = min;
}

onebombbtn.addEventListener('click', () => minebuttonclick(1));
threebombbtn.addEventListener('click', () => minebuttonclick(3));
fivebombbtn.addEventListener('click', () => minebuttonclick(5));
tenbombbtn.addEventListener('click', () => minebuttonclick(10));
fifteenbombbtn.addEventListener('click', () => minebuttonclick(15));
twentybombbtn.addEventListener('click', () => minebuttonclick(20));
