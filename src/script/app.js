let verify = $("#verify");
let sinField = $("#sinField");

//verify once button has been clicked
verify.click(() => {

    console.log(verifySIN(sinField[0].value));

})


//verify using enter key
sinField.keypress((e) => {

    if(e.which === 13)
        console.log(verifySIN(sinField[0].value));

})


function verifySIN(input){

    let arr = input.split(' ').join('').split('');
    let numArr = [];

    //make every element as integer
    arr.map((element) => {
        numArr.push(parseInt(element));
    });

    //iterate through every integer
    let sum = numArr.reduce((accumulator, value, index) => {
        
        let product;

        if (index % 2 === 0)
            product = value * 1;

        if (index % 2 === 1){
            product = value * 2;

            if (product > 9){
                let productArr = product.toString().split('');
                product = productArr.reduce((accumulator2, value2) => {
                    return accumulator2 + parseInt(value2);
                }, 0);
            }
        }

        return accumulator + product;

    }, 0);

    //verify if valid or not
    if (!input || (sum % 10 != 0)){
        sinField.addClass("errorBorder");
        setTimeout(() => {
            sinField.removeClass("errorBorder");
        }, 400);
        return false;
    }

    if (sum % 10 === 0){
        sinField.addClass("successBorder");
        setTimeout(() => {
            sinField.removeClass("successBorder");
        }, 400);
        return true;
    }
}