let btns = document.querySelectorAll('button[data-target]')
let scenes = document.querySelectorAll('.scene')
btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        let nextScene = btn.getAttribute('data-target');
        scenes.forEach(function(scene){
            scene.classList.remove('active')
        })
        document.querySelector('#' +nextScene).classList.add('active')
    })
})