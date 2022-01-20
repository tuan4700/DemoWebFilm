// // variable
// var usersApi = 'http://localhost:3000/Users';
// var eyeOnClick = document.querySelector('.handleUser-film__eye-icon');
// var handlePasswordBtn = document.querySelector('input[name="Password"]');

// // Start Function
// function start() {
//     handleCreateUser();
//     handleTextPassword();
// }
// start();

// // Functions
// function handleCreateUser() {
//     var onclickCreateBtn = document.querySelector('.handleUser-film__btn');
//     onclickCreateBtn.onclick = function() {
//         var emailAddress = document.querySelector('input[name="Email address"]').value;
//         var userName = document.querySelector('input[name="Username"]').value;
//         var userPassword = document.querySelector('input[name="Password"]').value;
//         var formInfoUser = {
//             name: userName,
//             email: emailAddress,
//             password: userPassword
//         };
//         postUser(formInfoUser);
//     };
// }

// function postUser(dataUser) {
//     var opstion = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dataUser)
//     };
//     fetch(usersApi, opstion)
//         .then(function (response) {
//             alert('Tạo user thành công');
//         })
// }

// function handleTextPassword() {
//     eyeOnClick.onclick = function() {
//         if(handlePasswordBtn.type === 'password') {
//             handlePasswordBtn.type = 'text';
//         } else {
//             handlePasswordBtn.type = 'password';
//         }
//     }
// }