document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //
    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
        console.log('Valid user');
        window.location.href = 'banking.html';
    }
})