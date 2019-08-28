const btn = document.querySelectorAll('button');
const hub = document.querySelector('.hub');

[...btn].forEach((item, index) => {
  item.addEventListener('click', (e) => {
    changeActive(e);
    
    const className = e.target.innerHTML.toLowerCase();
    hub.classList.remove('fast', 'medium', 'slow');
    hub.classList.add(className);
  });
});

function changeActive(e) {
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove('active')
  }
  e.target.classList.add('active');
}