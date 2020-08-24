// Budget module/controller to process the data coming from he UI
var budgetController = (function() {
    
    
})();

// UI module/controller to read the data from the UI
var UIController = (function(){
    var DOMstrings = {
        inputType:'.add__type',
        inputDescription:'.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function(){
            return { // to return the three elements we should return them as an object
                type: document.querySelector(DOMstrings.inputType).value, //Will be eaither inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };          
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();

// The global app controller to connect the budget and UI modules
var controller = (function(budgetCtrl, UICtrl){
    
    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function(){

       // 1. Get the field input data
            var input = UICtrl.getInput();
            console.log(input);

       // 2. Add the item to the budget controller

       // 3. Add the item to the UI

       // 4. Calculate the budget

       // 5. Display the budget on the UI


    }


    // Add event listner to add button
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)
    
    // Add key event to do the same thing (when the user click the add button)
    // if the user press the enter key in the keyboard
    document.addEventListener('keypress', function(event) {
        //console.log(event); //the key code for the enter key is 13 
        if(event.keyCode === 13 || event.which === 13){ //some older browser use which property
            //console.log('Enter key was pressed.');
            ctrlAddItem();
        } 
    });

})(budgetController, UIController);



