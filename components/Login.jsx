import { signIn } from "next-auth/client";
import Image from "next/image";

const Login = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<Image
				src="/Facebook-logo.png"
				width={400}
				height={400}
				objectFit="contain"
			/>
			<h1
				onClick={signIn}
				className="p-5 bg-blue-500 text-white rounded-full text-center cursor-pointer">
				Login with Facebook
			</h1>
		</div>
	);
};

export default Login;
