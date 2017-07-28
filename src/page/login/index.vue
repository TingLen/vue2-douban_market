<template>
	<div class="login">
		<!--登陆界面head-->
		<div class="login_head">
			<a class="login_headCancle">取消</a>
			<span class="login_headInfo">登陆豆瓣</span>
		</div>

		<!--输入帐号密码-->
		<div class="login_form">
			<form action="#" method="post">
				<p class="login_formItem">
					<input type="text" name="account" placeholder="邮箱/手机号/用户名">
				</p>
				<p class="login_formItem">
					<input type="text" name="account" placeholder="密码">
				</p>
				<p class="login_formButton">
					<button>登录</button>
				</p>
			</form>
		</div>

		<!--其他方式登录&找回密码-->
		<div class="login_other">
			<a href="#">其他方式登录</a>
			<span>&</span>
			<a href="#">找回密码</a>
		</div>

		<!--注册-->
		<div class="login_download">
			<a href="#">注册豆瓣</a>
			<a href="#">下载豆瓣App</a>
		</div>
	</div>
</template>
<script>
	
</script>

<style>
	.login_head{
		width: 100%;
		height: 0.8rem;
		padding: 0.25rem;
		line-height: 0.8rem;
		border-bottom: 1px solid #ccc;
		text-align: center;
	}
	.login_head .login_headCancle{
		position: absolute;
		left: 0.3rem;
		font-size: 14px;
		color: #68cb78;
	}
	.login_head .login_headInfo{
		display: inline-block;
		font-size: 16px;
		font-weight: 600;
	}
	.login_form{
		margin: 0.4rem 0.4rem;
	}
	.login_form .login_formItem{
		height: 0.8rem;
		line-height: 0.8rem;
		border: 1px solid #ccc;
		padding: 0.3rem;
		margin-bottom: -1px;
	}
	.login_form .login_formItem input{
		border: none;
	}
	.login_form .login_formButton{
		height: 0.9rem;
		line-height: 0.9rem;
		margin-top: 0.3rem;
	}
	.login_form .login_formButton button{
		width: 100%;
		height: 0.9rem;
		background-color: #17AA52;
		border: 0px;
		border-radius: 0.13rem;
		color: #fff;
		font-size:16px;
	}
	.login_other{
		margin-top: 0.8rem;
		text-align: center;
		font-size: 16px;
		color: #ccc;
	}
	.login_other a{
		color: #68cb78;
	}

	.login_download{
		margin-top: 1rem;
		text-align: center;
	}
	.login_download a{
		color: #68cb78;
		margin: 0.13rem;
	}
</style>