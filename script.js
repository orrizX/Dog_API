let bttn = document.getElementById('clickButton')
let image = document.getElementById('image')

bttn.addEventListener('click',function(){
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(result  => {
    console.log(result)
    image.src = result.message
  })
  .catch(err => console.log(err))
})