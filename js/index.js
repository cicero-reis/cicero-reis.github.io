const links = document.getElementsByClassName('link');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        current[0].classList.remove('active')
        this.className += ' active'
    })
}
