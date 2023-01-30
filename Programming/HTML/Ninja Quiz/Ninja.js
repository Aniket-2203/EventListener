const correctAns=['A','B','B','A'];
const form=document.querySelector('.quiz-form');
const res=document.querySelector('.result');

form.addEventListener('submit',e=>{
e.preventDefault();
let score=0;
const userAns=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

// check ans
userAns.forEach((ans,index)=>{
  if(ans===correctAns[index])
  {
    score+=25;
  }
  
});
// for automatically scrolling to top when we submit the form
scrollTo(0,0);
// showing res on document
//  res.querySelector('span').textContent=`${score}%`;
 res.classList.remove('d-none');

//  for animating res
  let output=0;
  const timer=setInterval(()=>{
    res.querySelector('span').textContent=`${output}%`;
    if(output===score){
      clearInterval(timer);
    }
    else{
      output++;
    }
  },10);
});
// window object



