const menu=document.getElementById('menubtn') ;
 const navMenu=document.getElementById('navMenu');
 const closeMenu=document.getElementById('close');
 //open menu
 
 menu.addEventListener('click', function(){
   closeMenu.style.display='inline'
 if(navMenu.classList.contains('review')){
     navMenu.classList.remove('review')
     menu.style.display='none'   
 }

 //close menu
 closeMenu.addEventListener('click',function(){
       
 if(closeMenu.classList.contains('closeMenu')){
    navMenu.classList.add('review')
    closeMenu.style.display='none'
    menu.style.display='block';
    }
    })
 });

 //faq
 const faq=document.querySelector('.clk')
 const revText=document.querySelector('.clktxt');
 faq.addEventListener('click',function(){
 if(revText.classList.contains('txt')){
  revText.classList.remove('txt')

 }
   else{
    revText.classList.add('txt')

   }
 });