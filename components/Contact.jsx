import Image from "next/image";

const Contact = ({ src, name }) => {
	return (
		<div className="group flex items-center space-x-3 mb-2 relative hover:bg-gray-200 rounded-xl cursor-pointer p-2">
			<Image
				src={src}
				alt={name}
				objectFit="cover"
				width={50}
				height={50}
				className="rounded-full"
				layout="fixed"
			/>
			<p>{name}</p>
			<div className="absolute bottom-3 left-0 bg-green-600 h-3 w-3 rounded-full group-hover:animate-bounce"></div>
		</div>
	);
};

export default Contact;
