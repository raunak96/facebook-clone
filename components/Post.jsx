import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import moment from "moment";
import Image from "next/image";

const Post = ({
	name,
	message,
	postImage,
	image,
	timestamp,
	isServerRendered = false,
}) => {
	return (
		<div className="flex flex-col">
			<div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
				<div className="flex items-center space-x-2">
					<Image
						className="rounded-full"
						src={image}
						width={40}
						height={40}
						alt="dp"
					/>
					<div>
						<p className="font-medium">{name}</p>
						<p className="text-xs text-gray-400">
							{timestamp
								? moment(
										new Date(
											isServerRendered
												? timestamp
												: timestamp.toDate()
										)
								  ).format("ll")
								: "Loading Date..."}
						</p>
					</div>
				</div>
				<p className="pt-5">{message}</p>
			</div>
			{postImage && (
				<div className="relative h-56 md:h-96 bg-white">
					<Image
						src={postImage}
						objectFit="cover"
						layout="fill"
						alt="postImage"
					/>
				</div>
			)}
			{/* Footer */}
			<div className="flex justify-between items-center rounded-b-2xl bg-white text-gray-400 shadow-md border-t">
				<div className="inputIcon rounded-none rounded-bl-2xl">
					<ThumbUpIcon className="h-4" />
					<p className="text-xs sm:text-base">Like</p>
				</div>
				<div className="inputIcon rounded-none">
					<ChatAltIcon className="h-4" />
					<p className="text-xs sm:text-base">Comment</p>
				</div>
				<div className="inputIcon rounded-none rounded-br-2xl">
					<ShareIcon className="h-4" />
					<p className="text-xs sm:text-base">Share</p>
				</div>
			</div>
		</div>
	);
};

export default Post;
