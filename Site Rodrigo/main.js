 // Hide Money
 function hideMoney() {
    const allMoneyItems = document.getElementsByClassName("money");
    const className = "box__svg--hidden";
  
    for (let i = 0; i < allMoneyItems.length; i++) {
        allMoneyItems[i].classList.toggle(className);
    }
    swapSvg();
  
  }
  const button = document.getElementById("hide_money");
  
  function swapSvg(){
    const svg = document.querySelectorAll('#hide_money svg');
    const swap = 'btn__hide';
    svg[0].classList.toggle(swap);
    svg[1].classList.toggle(swap);
  }
  
  button.addEventListener("click", hideMoney);













  
// função para as last transactions//

//   // async function
// async function fetchAsync (url) {
//     // await response of fetch call
//     let response = await fetch(url);
//     // only proceed once promise is resolved
//     let data = await response.json();
//     // only proceed once second promise is resolved
//     return data;
//   }
  
//   function getGeneralInfo() {
//     // trigger async function
//     // log response or catch error of fetch promise
//     const url = 'http://localhost:3000/general-info'
//     fetchAsync(url)
//       .then(data => {
//         console.log('success: ', data);
//         console.log('balance: ', data.balance)
//         console.log('incomes: ', data.incomes)
//         console.log('expenses: ', data.expenses)
//         // const balance = document.getElementById('balance')
//         // balance.textContent = `€ ${data.balance} | € ${data.incomes} | € ${data.expenses}`
//       })
//       .catch(reason => console.log('error: ', reason.message))
//   }
  
//   function getTransactions() {
//     const url = 'http://localhost:3000/transactions'
  
//     fetchAsync(url)
//       .then(data => {
//         console.log('success: ', data);
  
//         data.forEach(data => {
//           if (!data.isExpense) {
//             console.log('Is income')
//           } else {
//             console.log('Is not!')
//           }
//           console.log(!data.isExpense)
//         })
//       })
//       .catch(reason => console.log('error: ', reason.message))
//   }
  
//   getGeneralInfo()
//   getTransactions()