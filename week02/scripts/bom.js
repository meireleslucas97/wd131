document.addEventListener('DOMContentLoaded', function() {

    const input = document.querySelector('#favchap');
    const button = document.querySelector('#addButton');
    const list = document.querySelector('#list');

    button.addEventListener('click', function() {
       
        if (input.value.trim() !== '') {
           
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            deleteButton.textContent = '❌';

            deleteButton.addEventListener('click', function() {
                list.removeChild(li); 
                input.focus(); 
            });

            li.textContent = input.value;
            li.appendChild(deleteButton); 
            list.appendChild(li); 

            input.value = ''; 
            input.focus(); 
            
        } else {
            alert('Please enter a chapter before adding.'); 
            input.focus();
        }
    });
});
