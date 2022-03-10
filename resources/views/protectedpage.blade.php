<form role="form" method="POST" action="{{ url('/login') }}">
    {{ csrf_field() }}
	    <div class="input-group">
	        <span class="input-group-addon" id="basic-addon1">
	        <i class="fa fa-user" aria-hidden="true"></i></span>
	        <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus aria-describedby="basic-addon1" placeholder="E-mail">
	    </div>

	    <div class="input-group">
	        <span class="input-group-addon" id="basic-addon2">
	        <i class="fa fa-key" aria-hidden="true"></i></span>
	        <input id="password" type="password" class="form-control" name="password" required aria-describedby="basic-addon2" placeholder="Password">
	    </div>
    <div>
        <div class="checkbox checkbox-inline">
            <input type="checkbox" name="remember" id="remember">
            <label for="remember">Remember Me</label>
        </div>
    </div>
    <div class="text-center">
        <input type="submit" class="btn btn-success btn-submit" value="Login">
    </div>
<!--
    <div class="text-center">
        <a class="btn btn-link" href="{{ url('/password/reset') }}">
        Forgot Your Password?
        </a>
    </div>
-->
</form>