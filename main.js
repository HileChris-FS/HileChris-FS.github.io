let margin = document.getElementById('myButton').style.marginBottom = 50 + 'px';

let quest = document.getElementById('myButton').onclick = saving;

function saving() {
    document.getElementById('response').innerHTML = "Would you like to save 10% and join my newsletter?";
    document.getElementById('myButton').remove();

    let y = document.createElement('button');
    y.innerHTML = "Yes";
    y.type = 'button';
    y.id = 'button';
    y.className = 'center';
    document.body.appendChild(y);

    let z = document.createElement('button');
    z.innerHTML = "No";
    z.type = 'button';
    z.id = 'button2';
    z.className = 'center';
    z.style.marginBottom = 50 + "px";
    document.body.appendChild(z);


    let myBtn = document.getElementById('button').onclick = yes;
    let myBtn2 = document.getElementById('button2').onclick = no;

    function no(){
        document.getElementById('response').innerHTML = "Thanks for visiting!"
        document.getElementById('button').remove();
        document.getElementById('button2').remove();
    }
    function yes() {
        let x = document.createElement("input");
        x.type = 'text';
        x.id = 'input';
        x.className = 'center';
        document.body.appendChild(x);

        let submit = document.createElement('button');
        submit.innerHTML = "submit";
        submit.type = 'button';
        submit.id = 'submit';
        submit.className = 'center';
        submit.style.marginBottom = 50 + "px";
        document.body.appendChild(submit);

        document.getElementById('button').remove();
        document.getElementById('button2').remove();

        document.getElementById('response').innerHTML = "Enter email address:";



        document.getElementById('submit').onclick = getValue;

        function getValue(){
            let validate = document.getElementById('input').value;
            email(validate);
        }

        function email(validate){

            if (validate === ""){
               document.getElementById('response').innerHTML = "Please enter email address:";
            }
            else {
                discode(5);
            }
        }

        function discode(length) {
            let result = '';
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            document.getElementById('response').innerHTML = "Your discound code is: " + result;
            document.getElementById('response').style.marginBottom = 50 + 'px';
            document.getElementById('input').remove();
            document.getElementById('submit').remove();
        }
    }







}

