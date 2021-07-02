class countDown{
	constructor(classe1, classe2){
		//zoom
		// let participantes =  document.querySelector('.participants-ul')
		// let participantes =  document.querySelector('.GvcuGe')		
		let participantes =  document.querySelector(`.${classe1}`)		
		this.observer(participantes)
	}
	pegarParticipantes(){
		let participantes_ =  Array.from(document.querySelectorAll(`.${classe2}`))
		// let participantes_ =  Array.from(document.querySelectorAll('.ZjFb7c'))
		// let participantes_ =  Array.from(document.querySelectorAll('.participants-item__display-name'))

		//verificar se existe essa propriedade;
		if(!localStorage.hasOwnProperty("participantes")){
			localStorage.setItem('participantes', JSON.stringify([]));
		}

		participantes_ = Array.from(participantes_).map(participante => participante.innerText)	
		let local = participantes_.filter(participante=>{
			if (!(JSON.parse(localStorage.getItem('participantes')).includes(participante)) && (participante!=="")){
				return participante;
			}				
		})

		if(local.length > 0){
		localStorage.setItem('participantes', JSON.stringify([...JSON.parse(window.localStorage.getItem('participantes')), ...local]))
		}	
		console.log('alterado')	 
	}

	 observer(participantes){
		try{
			let observer = new MutationObserver(this.pegarParticipantes)
			observer.observe(participantes, {childList:true});
		}catch(error){
			console.log(error)			
			setTimeout(function(){new countDown}, 15000)
			
		}
	}
}

new countDown('GvcuGe', 'ZjFb7c'); 
//new countDown('participants-ul', 'participants-item__display-name'); 

