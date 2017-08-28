function sayHello(name) {
    return "Hello " + (name || "anonymous person")
}

function setH1(string) {
    var h1 = document.querySelector('#greeting')
    h1.innerText = string
}

function showGreeting() {
    setH1(sayHello("Kevin"))
}

var button = document.querySelector('button')
button.addEventListener('click', showGreeting)

//showGreeting is a "callback", something that accounts for the future action//

// button.addEventListener('click', function(){
//     setH1(seyHello("BANANAS"))
// })
// ^^^^^^^^^^^^^^^^^^^^^^^^
//the function here is called "anonymous", used when only wanting to use a particular example by declaring that function//
