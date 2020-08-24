// Budget module/controller to process the data coming from he UI
var budgetController = (function () {

    //Expense function costructor ((class) in another language)
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    //Income function costructor ((class) in another language)
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems:{
            exp: [],
            inc: []
        },
        totals:{
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function(type,des, val){
            var newItem, ID;

            // Create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            }
            

            // Create new item based on 'inc' or 'exp' type
            if(type === 'exp'){
                newItem = new Expense(ID, des, val);
            }else if(type === 'inc'){
                newItem = new Income(ID, des, val);
            }
            // Push it into our data structure 
            data.allItems[type].push(newItem);
            // Return the new element
            return newItem;
        },
        testing: function(){
            console.log(data);
        }
    };

})();

// UI module/controller to read the data from the UI
var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function () {
            return { // to return the three elements we should return them as an object
                type: document.querySelector(DOMstrings.inputType).value, //Will be eaither inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    };

})();

// The global app controller to connect the budget and UI modules
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();
        // Add event listner to add button
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)
        // Add key event to do the same thing (when the user click the add button)
        // if the user press the enter key in the keyboard
        document.addEventListener('keypress', function (event) {
            //console.log(event); //the key code for the enter key is 13 
            if (event.keyCode === 13 || event.which === 13) { //some older browser use which property
                //console.log('Enter key was pressed.');
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {
        var input, newItem;

        // 1. Get the field input data
        input = UICtrl.getInput();

        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI


    };

    return {
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    };




})(budgetController, UIController);



// The only code outside controllers to start the app
controller.init();
























