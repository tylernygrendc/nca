window.addEventListener('load', () => {
    if(window.innerWidth < 600){
        document.querySelector('#site-title').innerText = "NCA";
    } else {
        document.querySelector('#site-title').innerText = "Nygren Chiropractic and Acupuncture";
    } 
});