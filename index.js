let todolist = [
    {
        item:'buy milk',
        duedate:'24-01-025'
    },

    {
        item:'go to college',
        duedate:'24-01-2025'
    },
     ];
    displayitems();


    function addtodo() {
     let inputelement = document.querySelector('#todo-input');
     let dateelement = document.querySelector('#todo-date');
     let todoitem = inputelement.value;
     let tododate = dateelement.value;
    todolist.push({item: todoitem, duedate: tododate});
    inputelement.value=''
    dateelement.value=''
    displayitems()
    }


    function displayitems() {
        let containerelement = document.querySelector('.todo-container');
        let newhtml ='';
        for(let i=0; i < todolist.length; i++) {
            let{item, duedate} = todolist[i];

         newhtml = newhtml + `

            <span>${item}</span>
             <span>${duedate}</span>
            <button class="button-delete" onclick="todolist.splice(${i}, 1); 
            displayitems();
            ">delete</button>
            `;
        
        }
        containerelement.innerHTML = newhtml;
       
    }
    

