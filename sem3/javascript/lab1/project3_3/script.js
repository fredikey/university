
const promptName = () => {
	const name = prompt('Write your name')
	// handle case when prompt was closed and name !== ''
	const isNameInvalid = name === null || name.trim() === ''
	// rerun prompt window if name is incorrect
	if (isNameInvalid) {
		promptName()
		return;
	}
	const confirmStatus = confirm(`${name}, Are you sure?`)
	if (confirmStatus) {
		alert(`Hi, ${name}`)
	} else {
		promptName()
	}
}

promptName()
