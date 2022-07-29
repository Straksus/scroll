let itog = ()=>{
    const shapka = document.querySelector('.shapka')
    var clientHeight=document.documentElement.offsetHeight;  //высоты блока
    var intViewportHeight = window.innerHeight;  // высота видимой области окна
    var scrollTopinfo = document.documentElement.scrollTop; 
    let scrolTop = clientHeight - intViewportHeight;
    let procent = scrolTop / 100;   // узнаем сколько px в одном %
    let itog = scrollTopinfo / procent;  // узнаем на сколько процентов мы опустились вниз
    if (scrolTop > 0){
        shapka.style.width =`${itog}%`;
    }
}
window.addEventListener('scroll', itog);