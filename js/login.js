let x = document.getElementById('userName');
let p = document.getAnimations('userPassword');

document.getElementById('formLogin').addEventListener('submit', (ee) => {
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    if (x.value === 'admin@gmail.com' && p.value === "querty") {
        swal.fire({
            position: 'center',
            type: 'success',
            title: 'Welcome',
            text: 'Access Granted'
        });
        x.value = '';
        p.value = '';
        setTimeout(() => {
            loadPage();
        },3000);
    } else {
        swal.fire({
            position: 'center',
            type: 'error',
            title: 'Error',
            text: 'Access Denied'
        });
        x.value = '';
        p.value= '';
    }
    const loadPage = () => {
        window.location.href= "./admin.html";
    }
});