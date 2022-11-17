
document.querySelector('.send-message').addEventListener('click', function (e) {
  let name = document.getElementById('fname');
  let email = document.getElementById('email');
  let subject = document.getElementById('subject1');
  let message = document.getElementById('message');
  e.preventDefault()
  if (name.value && email.value && subject.value && message.value) {
    document.getElementById('#formmessage').textContent = 'Your Message has been sent successfully'
    document.getElementById('#formmessage').style.color = 'black'
    document.getElementById('#formmessage').style.background = '#4be955'
    document.getElementById('#formmessage').classList.toggle('hide');
    document.getElementById('subject1').value = '';
    document.getElementById('email').value = '';
    document.getElementById('fname').value = '';
    document.getElementById('message').value = '';
  }
  else {
    document.getElementById('#formmessage').textContent = 'Please fill all the required fields'
    document.getElementById('#formmessage').style.background = '#f52020'
    document.getElementById('#formmessage').style.color = 'white'
    document.getElementById('#formmessage').classList.toggle('hide');
  }
  setTimeout(() => {
    document.getElementById('#formmessage').classList.toggle('hide');
  }, 5000)
})

document.getElementById('subject1').value = '';
document.getElementById('email').value = '';
document.getElementById('fname').value = '';
document.getElementById('message').value = '';

document.getElementById('#idl1').addEventListener('click', function () {
  document.getElementById('myNavbar').classList.remove('in')
})
document.getElementById('#idl2').addEventListener('click', function () {
  document.getElementById('myNavbar').classList.remove('in')
})
document.getElementById('#idl3').addEventListener('click', function () {
  document.getElementById('myNavbar').classList.remove('in')
})
document.getElementById('#idl4').addEventListener('click', function () {
  document.getElementById('myNavbar').classList.remove('in')
})
document.getElementById('#idl5').addEventListener('click', function () {
  document.getElementById('myNavbar').classList.remove('in')
})

// var Mailgun=require('mailgun.js')
// var formData = require('form-data')

// const API_KEY = '8949faf735bddac625b221502f950867-48c092ba-af876444';
// const DOMAIN = 'sandbox2681916a396a4eccaa403910be396df8.mailgun.org';

// const mailgun = new Mailgun(formData);
// const client = mailgun.client({username: 'api', key: API_KEY});

// const messageData = {
//   from: 'kapilyaswanth.cs18@bitsathy.ac.in',
//   to: 'kapilyaswanth.cs18@bitsathy.ac.in',
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomeness!'
// };

// client.messages.create(DOMAIN, messageData)
//  .then((res) => {
//    console.log(res);
//  })
//  .catch((err) => {
//    console.error(err);
//  });
