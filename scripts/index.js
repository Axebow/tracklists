if(localStorage.getItem('theme')!==null){
    const theme = localStorage.getItem('theme');
    document.getElementById('main').className = theme;
}
else{
    document.getElementById('main').className = 'light-theme';
}

function switchTheme(){
    const element = document.getElementById('main');
    if(element.className==='light-theme'){
        element.className='dark-theme';
        localStorage.setItem('theme', 'dark-theme');
    }
    else{
        element.className='light-theme';
        localStorage.setItem('theme', 'light-theme');
    }
}