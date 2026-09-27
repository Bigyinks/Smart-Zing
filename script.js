const rotateBtn = document.querySelector('.second') 
rotateBtn.addEventListener('click', function(){
    this.classList.remove('rotate');

    // tiny delay so browser resets
    setTimeout( function(){
        this.classList.add('rotate');
    }.bind (this), 10); // <--bind this to the button
});

const carts = document.querySelectorAll(".destination-cart");
carts.forEach(cart => {
    cart.addEventListener('click', function(){
        // add the pop
        this.classList.add('pop');

        // remove it after 300ms so it can animate again next click
        setTimeout(() =>{
            this.classList.remove('pop');
        }, 300);
    });
});