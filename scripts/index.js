
const faqBox = document.querySelectorAll('.faq-div');

faqBox.forEach(box=>{
    const plusBtn = box.querySelectorAll('.plus-icon');
    plusBtn.src = '/assets/images/icon-plus.svg'
    const displayText = box.querySelectorAll('.main-text');
    displayText.forEach(text=>text.classList.add('disappear'))
    plusBtn.forEach((btn,index)=>{
        btn.addEventListener("click",()=>{
            
           if(displayText[index].classList.contains('disappear')){
            displayText[index].classList.remove('disappear')
            displayText[index].classList.add('appear');
            btn.src = '/assets/images/icon-minus.svg'
           }
           else if(displayText[index].classList.contains('appear')){
            displayText[index].classList.add('disappear')
            displayText[index].classList.remove('appear');
             btn.src = '/assets/images/icon-plus.svg'
           }

            // if(displayText[index].classList.contains('disappear')){
            //     displayText[index].classList.toggle('appear')
            //      btn.src = '/assets/images/icon-minus.svg'
               
            // }
            // else if(displayText[index].classList.toggle('appear')){
            //     displayText[index].classList.add('disappear')
            //      btn.src = '/assets/images/icon-plus.svg'
            // }
            
        })
    })
})
