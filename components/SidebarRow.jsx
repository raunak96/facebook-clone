import Image from "next/image";

const SidebarRow = ({ src, Icon, title }) => {
	return (
		<div className="flex items-center p-4 space-x-2 rounded-xl hover:bg-gray-200 cursor-pointer">
			{src && (
				<Image
					className="rounded-full"
					src={src}
					width={30}
					height={30}
					layout="fixed"
				/>
			)}
			{Icon && <Icon className="h-8 w-8 text-blue-500" />}
			<p className="hidden sm:flex font-medium">{title}</p>
		</div>
	);
};

export default SidebarRow;
