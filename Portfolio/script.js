/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  } 


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Web Designer","Web Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })

/*---------------Contact form connect with google sheet-------------*/
		const scriptURL = 'https://script.google.com/macros/s/AKfycbxM8C4Sg89XJjxYsyVjUPjJn5dqYTam6LFjkR4S131_Kn11MGsQCgkY0pRdEldWcgjxdw/exec'
    
		const form = document.forms['submit-to-google-sheet']
		const msg = document.getElementById("msg")

		form.addEventListener('submit', e => {
			e.preventDefault()
			fetch(scriptURL, { method: 'POST', body: new FormData(form) })
				.then(response => {
					msg.innerHTML = "Message sent successfully"
					setTimeout(function () {
						msg.innerHTML = ""
					}, 5000)
					form.reset()
				})
				.catch(error => console.error('Error!', error.message))
		})
