let images = document.querySelectorAll('.container img')

images.forEach(img =>{
    img.addEventListener('click',()=>{  
        images.forEach(img =>{
            img.classList.remove('active')
  
        })
        img.classList.add('active')

    })
     
})