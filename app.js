setInterval(() => {
	let date = new Date()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()
	let session = hours < 12 ? 'AM' : 'PM'

	hours = hours < 10 ? '0' + hours : hours
	minutes = minutes < 10 ? '0' + minutes : minutes
	seconds = seconds < 10 ? '0' + seconds : seconds

	let time = hours + ':' + minutes + ':' + seconds + ' ' + session

	document.querySelector('#clock').innerText = time
}, 1000)
