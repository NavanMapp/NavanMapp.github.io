// main button declaration
const main_btn = document.getElementById("main_btn").addEventListener('click', (e) => {
    e.preventDefault();

    //variable declaration
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    //writing data into firebase DB
    const today = new Date();
    firebase.firestore().collection("queryMessages").doc().set( {
    name: name,
    email: email,
    comment: comment,
    created_at: today.getFullYear() + " " + (today.getMonth() + 1) + " " + today.getDate()
    }).catch(function(error){
        $('#email').css('border-bottom', 'solid red 2px');
        $('#error-email').text(error.message);
        return false;
    });
    swal({
        title: "Query Log",
        text: "Thank you for contacting us, our support team will be in touch indefinitely",
        icon: "success",
        button: "Login"
    }).then(function(){
        window.location.href = "main.html";
    });
});