const image = document.querySelector('.img1');


image.addEventListener('mouseover', function (event) {
  if (event.target.tagName === 'IMG' ) {
    image.innerHTML=
    `<h1 id="h1" >Bulb On</h1><img src="./assets/on.jpg"  height="80%" >
    body.style="background: #fff783;"`
    
    
  }
  
  
  
  else {
    image.innerHTML=` <h1 id="h1" >Bulb Off</h1><img src="./assets/off.jpg" height="80%">`
   
  }
});