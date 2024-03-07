let menuIcon = document.getElementsByClassName('.men');
menuIcon.onClick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}