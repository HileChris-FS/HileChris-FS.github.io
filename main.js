
let quest = document.getElementById('myButton').onclick = saving;

function saving(){
    document.getElementById('response').innerHTML = "Would you like to save 10% and join my newsletter?";
    document.getElementById('myButton').remove();


    let x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    document.body.appendChild(x);

    let y = document.createElement('button');
    y.innerHTML = "Submit";
    y.type = "frmBtn";
    document.body.appendChild(y);
}

/****
let want = document.querySelector('button').onclick = discount;

function discount() {

    let response = document.querySelector('input').value;
    if (response === "yes") {

        let email = document.getElementById("response").innerHTML = "Enter a valid email address:";
        while (email === "") {
            email = prompt("Please enter valid email address:")
        }

        function disCode(length) {
            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        let discount = document.getElementById('response').innerHTML = "Welcome! Your discount code is: " + disCode(5);

    } else {
        let no = document.getElementById('response').innerHTML = "Thank you for visiting!";
    }

}
*/
