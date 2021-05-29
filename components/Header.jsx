import Image from "next/image";
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	ViewGridIcon,
} from "@heroicons/react/solid";
import {
	FlagIcon,
	PlayIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";

const Header = () => {
	const [session] = useSession();
	return (
		<div className="sticky top-0 flex items-center bg-white z-50 p-2 lg:px-5 shadow-md">
			{/* Left */}
			<div className="flex items-center">
				<Image src="/fb.png" width={40} height={40} layout="fixed" />
				<div className="flex items-center ml-2 rounded-full bg-gray-100 p-2">
					<SearchIcon className="h-6 text-gray-600" />
					<input
						className="hidden md:flex items-center ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink"
						type="text"
						placeholder="Search Facebook"
					/>
				</div>
			</div>

			{/* Center */}
			<div className="flex justify-center flex-grow">
				<div className="flex space-x-6 md:space-x-2">
					<HeaderIcon Icon={HomeIcon} active={true} />
					<HeaderIcon Icon={FlagIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
				</div>
			</div>

			{/* Right */}
			<div className="flex justify-end items-center sm:space-x-2">
				<Image
					className="cursor-pointer rounded-full"
					onClick={signOut}
					src={session.user.image}
					width={40}
					height={40}
					layout="fixed"
				/>
				<p className="whitespace-nowrap font-semibold pr-3">
					{session.user.name}
				</p>
				<ViewGridIcon className="icon" />
				<ChatIcon className="icon" />
				<BellIcon className="icon" />
				<ChevronDownIcon className="icon" />
			</div>
		</div>
	);
};

export default Header;
