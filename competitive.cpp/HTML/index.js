const ul=document.querySelector('ul');
// ul.forEach(lis=>{
//     lis.addEventListener('click',e=>{
//         e.target.remove();
//     });
// });
// const button=document.querySelector('button');
// console.log(button);
// button.addEventListener('click',()=>{
//     const li=document.createElement('li');
//     li.textContent='Patel';
//     ul.append(li);
// });  

const button=document.querySelector('button');
button.addEventListener('click',()=>{
const li=document.createElement('li');
li.textContent='Patel';
// ul.append(li);
ul.prepend(li);
});
 
 const items=document.querySelectorAll('li');
 items.forEach(item=>{
    item.addEventListener('click',e=>{
        e.target.remove();
    });
 });
