document.getElementById('button').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.modal-close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display = 'none';

});