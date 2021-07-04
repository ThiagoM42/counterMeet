class countDown{
	constructor(el_ul_, el_li_){
		//zoom
		// let participantes =  document.querySelector('.participants-ul')
		// let participantes =  document.querySelector('.GvcuGe')
		this.el_ul = el_ul_			
		this.el_li = el_li_	
		console.log(this.el_li)		
		this.participantes =  document.querySelector(`.${this.el_ul}`)	
		this.observer(this.el_ul, this.el_li)
	}
	pegarParticipantes(li){
		let participantes_ =  Array.from(document.querySelectorAll(`.${li}`))
		console.log(li)

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

	 observer(ul, li){
		try{
			let observer = new MutationObserver(()=>this.pegarParticipantes(this.el_li))
			observer.observe(this.participantes, {childList:true});
		}catch(error){
			console.log(error)								
			setTimeout(function(){new countDown(ul, li) }, 6000)
			
		}
	}
}

//ZOOM
//new countDown('participants-ul', 'participants-item__display-name'); 
//MEET
new countDown('GvcuGe', 'ZjFb7c'); 
