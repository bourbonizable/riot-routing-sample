<login>
	<form class="form" onsubmit="{ login }">
		<input name="username" type="text" placeholder="username">
		<input name="password" type="password" placeholder="password">
		<button>Submit</button>
	</form>
	<script>
		var onUserLogged = (user) => {
			this.user = user;
		};
		this.state = opts.state;

//		auth.login = function(params) {
//			console.log(222);
//			console.log(params);
//			NProgress.start();
//			fetch('https://api.github.com/users/technoweenie/repos').then(function(response){
//				return response.json();
//			}).then(function(json) {
//				self.items = json;
//				auth.trigger('login', json)
//				NProgress.done();
//			});
//		};
		// any tag on the system can listen to login event
//		auth.on('login', function(json) {
//			console.log('Hey');
//			riot.mount('#content', 'github', { items: json});
//		})

		login(e){
			var res = this.state.user.authenticate(this.username.value, this.password.value)
			if (res == true) {
				this.state.trigger('user::logged', this.user);
				riot.route('/', 'Login successful', true);
				//riot.mount('#content', 'index', this.user);
			} else {
				this.state.trigger('user::error', res)
			}
			e.preventDefault();
		}

		// below pazzles me
		this.state.on('user::logged', onUserLogged)

		this.on('unmount', () => {
			this.state.off('user::logged', onUserLogged)
		})

	</script>
</login>
