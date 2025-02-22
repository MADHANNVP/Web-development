document.addEventListener('DOMContentLoaded',()=>{
    const button1=document.querySelector('.btn');
    const sider=document.querySelector('.sidebar');
    const blurs=document.querySelector('.shadow');
    button1.addEventListener('click',()=>{
        sider.classList.add('side');
    });
    button1.addEventListener('click',()=>{
        blurs.classList.add('sha');
    });
    blurs.addEventListener('click',()=>{
        blurs.classList.remove('sha');
    });
    blurs.addEventListener('click',()=>{
        sider.classList.remove('side');
    });
});
