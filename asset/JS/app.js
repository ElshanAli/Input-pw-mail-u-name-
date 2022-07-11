let but_log = document.querySelector('#bt-log')

but_log.addEventListener('click', (ev) => {
    ev.preventDefault();
    let us_name = document.querySelector('#user-name')
    let email = document.querySelector('#gmail')
    let pass = document.querySelector('#password')
    let firstLetter = document.getElementById('user-name').value.slice(0, 1).toUpperCase()
    let txt = document.getElementById('user-name').value.slice(1).toLowerCase()
    let endun = firstLetter + txt;
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let resEmail = email.value.match(regex)

    if (us_name == null || us_name == "") {
        alert('Please fill in UserName')
    } else {
        document.querySelector('#usnm').innerHTML = endun;
    }
    if (pass.value.lenght < 6) {
        alert('Password must contain at least 6 characters')
    }
    if (email.value == null || email.value == "") {
        alert('Do not leave the email empty')
    } else {
        if (resEmail) {
            document.querySelector('#eml').innerHTML = resEmail;
        } else {
            alert('Enter your email correctly')
        }
    }
})