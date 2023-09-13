var form = document.getElementById('my-form');
form.addEventListener('submit',addItem);
var expenseItems = document.getElementById('expenseitems')


function addItem(e){
    e.preventDefault();
    var expenseAmount = document.getElementById('expenseamount').value;
    var description = document.getElementById('description').value;
    var category = document.getElementById('category').value;
    var li = document.createElement('li');
    li.className = 'items';
    li.appendChild(document.createTextNode(expenseAmount+'-'+category+'-'+description));
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    editBtn.className = "btn btn-primary";
    deleteBtn.className = 'btn btn-danger';
    deleteBtn.appendChild(document.createTextNode('Delete Expense'));
    editBtn.appendChild(document.createTextNode('Edit Expense'));
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    expenseItems.appendChild(li);
    var expenseAmt = e.target.expenseamount.value;
    var expenseDescription = e.target.description.value;
    var expenseCategory = e.target.category.value
    var expenseTracker = {expenseAmt,expenseDescription,expenseCategory};
    localStorage.setItem(expenseTracker.expenseDescription,JSON.stringify(expenseTracker));
    deleteBtn.onclick = () =>{
        localStorage.removeItem(expenseTracker.expenseDescription);
        expenseItems.removeChild(li);
    }
    editBtn.onclick = () =>{
        document.getElementById('expenseamount').value = expenseTracker.expenseAmt;
        document.getElementById('description').value  = expenseTracker.expenseDescription;
        document.getElementById('category').value  = expenseTracker.expenseCategory;
        localStorage.removeItem(expenseTracker.expenseDescription);
        expenseItems.removeChild(li);

    }
}