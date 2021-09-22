
let quest = document.getElementById('myButton').onclick = saving;

function saving(){
    document.getElementById('response').innerHTML = "Would you like to save 10% and join my newsletter?";
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Hello World!");
    document.body.appendChild(x);

}



/******

let response = prompt("Would you like to receive a 10% coupon and a weekly newsletter?");

if (response === "yes") {

    let email = prompt("Enter a valid email address:");
    while (email === "") {
        email = prompt("Please enter valid email address:")
    }
    function disCode(length)
    {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
    return result;
}
        alert("Welcome! Your discount code is: " + disCode(5));

} else {
    alert("Thank you for visiting!")
}


 *******/