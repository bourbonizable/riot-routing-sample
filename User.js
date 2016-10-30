export default class {
	constructor(name = 'Jack') {
		this.name = name
		this.isLogged = false
		console.log("User initialized");
	}
	// fake authentication
	authenticate(userName, password) {
		this.name = userName;
		if (password == 'foo') {
			return this.isLogged = true
		}
		else
			return 'The password was wrong try with "foo"'
	}
}