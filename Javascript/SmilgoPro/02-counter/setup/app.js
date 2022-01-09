//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count --;
        }
        else if(styles.contains('increase')){
            count ++;
        }
        else if(styles.contains('reset')){
            count = 0;
        }

        //changes the color of the value id
        if(count > 0){
            //value.style.color="green";  - changes the value color
            document.body.style.backgroundColor="green" // - changes background color
            
        }
        else if(count < 0){
            //value.style.color="red";
            document.body.style.backgroundColor="red"
        }
        else if(count === 0){
            //value.style.color="#222";
            document.body.style.backgroundColor="#222"
        }

        value.textContent = count;
        
    })
})