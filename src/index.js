//Styles
import './style.css';

//Desktop;
import  './assets/images/bg-boost-desktop.svg';
import  './assets/images/bg-shorten-desktop.svg';

//Mobile
import './assets/images/bg-boost-mobile.svg';
import './assets/images/bg-shorten-mobile.svg';

//Modules
import { validURL } from './js/linkValidation';
import { addPageLogo } from './js/logo';
import { viewTemplate } from './js/view';


(function init(){
    addPageLogo();
    document.querySelector('body').innerHTML = viewTemplate();
    const btn = document.querySelector('#menu-btn');
    const menu = document.querySelector('#menu');
    const input = document.querySelector('#link-input');
    const linkForm = document.querySelector('#link-form');
    const errMsg = document.querySelector('#err-msg');
    
    
    function formSubmit (e){
        e.preventDefault();
        //console.dir(input);
        errMsg.innerHTML = '';
        input.classList.remove('border-green');
        errMsg.classList.remove('text-green-600');
        errMsg.classList.add('text-red');
        if(input.value === ''){
            errMsg.innerHTML = 'Please enter something';
            input.classList.add('border-red');
        }else if(!validURL(input.value)){
            errMsg.innerHTML = 'Please enter a valid URL',
            input.classList.add('border-red');
        }else{
            errMsg.innerHTML = '';
            input.classList.remove('border-red');
            errMsg.classList.remove('text-red');
            errMsg.classList.add('text-green-600');
            errMsg.innerHTML = 'Succeful';
            input.classList.add('border-green-600');
        }
    };

    linkForm.addEventListener('submit',formSubmit);
    btn.addEventListener('click',()=>{
        btn.classList.toggle('open');
        menu.classList.toggle('flex');
        menu.classList.toggle('hidden');
    });
})();


