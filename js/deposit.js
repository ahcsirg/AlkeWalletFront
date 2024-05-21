function deposit(){
    
    //funcion para depoditar monto
    const deposit_btn = document.getElementById('deposit-btn');
    deposit_btn.addEventListener('click', function(){

        const depositStringToInt = getInputNumb("deposit-amount");

        updateSpanTest("current-deposit", depositStringToInt);
        updateSpanTest("current-balance", depositStringToInt);

       //elimina el monto al presionar el click
        document.getElementById('deposit-amount').value = "";

    })

     //funcion para ejecutar retiro de monto
     const withdraw_btn = document.getElementById('withdraw-btn');
     withdraw_btn.addEventListener('click', function(){
        const withdrawNumb = getInputNumb("withdraw-amount");

        updateSpanTest("current-withdraw", withdrawNumb);
        updateSpanTest("current-balance", -1 * withdrawNumb);
        
        //elimina el monto al presionar el click
        document.getElementById('withdraw-amount').value = "";
    })

    //función para parsear la entrada de string a int
    function getInputNumb(idName){
        const amount = document.getElementById(idName).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }

    function updateSpanTest(idName, addedNumber){
        //x1.1 actualiza el saldo de la misma manera
        const current = document.getElementById(idName).innerText;
        const currentStringToInt = parseFloat(current);

        const total = currentStringToInt + addedNumber;

        //x1.2 configura este valor en el saldo
        document.getElementById(idName).innerText = total;
    }
}
