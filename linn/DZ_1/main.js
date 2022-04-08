const userName =
    {
        id: 1,
        first_name: 'Ruslan',
        surname: 'Kadyrov',
        phone: '0773529713'
    }

const usersName =
    {
        id: 2,
        first_name: 'Aleksandr',
        surname: 'Block',
        phone: '0222514342'
    }

const jsonUser = JSON.stringify(userName)
const jsonUsers = JSON.stringify(usersName)
console.log(jsonUser)
localStorage.setItem('userName', jsonUser)
localStorage.setItem('usersName', jsonUsers)

const data = localStorage.getItem('userName');
console.log(JSON.parse(data));

const deleteBtnAll = document.getElementById('button2')
deleteBtnAll.addEventListener("click", function (){
    localStorage.clear()
})
const userName1 = localStorage.getItem('1')
console.log(userName1)
const deleteBtn = document.getElementById('button')
deleteBtn.addEventListener("click", function (){
    localStorage.removeItem('usersName')
})

// 2 задание //


const parent = document.querySelector('#parent');
 const aElement = document.createElement('a');
 aElement.innerHTML = '0556-680-535';
 parent.appendChild(aElement);
 aElement.setAttribute('href',  `tel:0556680535`)
 const regex = /\W/gi
 const textPhoneNumber = aElement.textContent;
 const result = textPhoneNumber.replace(regex, '');
 console.log(result)



