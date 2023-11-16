let anchors = document.querySelectorAll('a');

for(let a = 0; a < anchors.length; a++){
    anchors[a].addEventListener('click', (event) => {
        event.preventDefault();
    })
}

let button1 = document.querySelector('#page2-btn1');
let button2 = document.querySelector('#page2-btn2');
let button3 = document.querySelector('#page2-btn3');

button1.addEventListener('click', (event) => {
    let show1 = document.querySelector('.change1');
    let show2 = document.querySelector('.change2');
    let show3 = document.querySelector('.change3');

   show1.style.display='block'
   show2.style.display='none'
   show3.style.display='none'
});

button2.addEventListener('click', (event) => {
    let show1 = document.querySelector('.change1');
    let show2 = document.querySelector('.change2');
    let show3 = document.querySelector('.change3');
 
    show1.style.display='none'
    show2.style.display='block'
    show3.style.display='none'
 });

 button3.addEventListener('click', (event) => {
    let show1 = document.querySelector('.change1');
    let show2 = document.querySelector('.change2');
    let show3 = document.querySelector('.change3');
 
    show1.style.display='none'
    show2.style.display='none'
    show3.style.display='block'
 });

 let click1 = document.querySelector('#page4Click1');
 let click2 = document.querySelector('#page4Click2');
 let click3 = document.querySelector('#page4Click3');
 let click4 = document.querySelector('#page4Click4');

 let pop1 = document.querySelector('#pop1');
 let pop2 = document.querySelector('#pop2');
 let pop3 = document.querySelector('#pop3');
 let pop4 = document.querySelector('#pop4');

 click1.addEventListener('click', (event) => {
    let pop1 = document.querySelector('#pop1');
    let pop2 = document.querySelector('#pop2');
    let pop3 = document.querySelector('#pop3');
    let pop4 = document.querySelector('#pop4');

    if(pop1.style.display === 'none' || pop1.style.display === ''){
        pop1.style.display='flex';

    }else{
        pop1.style.display='none';
    }
    pop2.style.display='none';
    pop3.style.display='none';
    pop4.style.display='none';
 })

 click2.addEventListener('click', (event) => {
    let pop1 = document.querySelector('#pop1');
    let pop2 = document.querySelector('#pop2');
    let pop3 = document.querySelector('#pop3');
    let pop4 = document.querySelector('#pop4');

    if(pop2.style.display === 'none' || pop2.style.display === ''){
        pop2.style.display='flex';
    }else{
        pop2.style.display='none';
    }

    pop1.style.display='none';
    pop3.style.display='none';
    pop4.style.display='none';


 })

 click3.addEventListener('click', (event) => {
    let pop1 = document.querySelector('#pop1');
    let pop2 = document.querySelector('#pop2');
    let pop3 = document.querySelector('#pop3');
    let pop4 = document.querySelector('#pop4');

    if(pop3.style.display === 'none' || pop3.style.display === ''){
        pop3.style.display='flex';
    }else{
        pop3.style.display='none';
    }

    pop1.style.display='none';
    pop2.style.display='none';
    pop4.style.display='none';
 })

 click4.addEventListener('click', (event) => {
    let pop1 = document.querySelector('#pop1');
    let pop2 = document.querySelector('#pop2');
    let pop3 = document.querySelector('#pop3');
    let pop4 = document.querySelector('#pop4');

    if(pop4.style.display === 'none' || pop4.style.display === ''){
        pop4.style.display='flex';
    }else{
        pop4.style.display='none';
    }

    pop1.style.display='none';
    pop2.style.display='none';
    pop3.style.display='none';
 })