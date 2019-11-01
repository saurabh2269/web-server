fetch('http://localhost:3000/wether?address=podar')
        .then((response) => {
            response.json().then((data) => {
                console.log(data);
                
            })
        });

const w_form = document.querySelector('form');
w_form.addEventListener('submit', () => {
    console.log('testing');
    
});