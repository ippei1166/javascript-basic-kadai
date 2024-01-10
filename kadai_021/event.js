const eventBtn = document.getElementById('btn');
const btnText = document.getElementById('text');

eventBtn.addEventListener('click',() =>{
    setTimeout(() => {
        btnText.textContent = 'ボタンを押しました'
      }, 2000);
});


  