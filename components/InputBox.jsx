import { EmojiHappyIcon } from "@heroicons/react/outline";
import {
	CameraIcon,
	VideoCameraIcon,
	XCircleIcon,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import Image from "next/image";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

const InputBox = () => {
	const [session] = useSession();
	const inputRef = useRef(null);
	const fileInputRef = useRef(null);
	const [imageForPost, setImageForPost] = useState(null);
	const sendPost = async e => {
		e.preventDefault();
		if (!inputRef.current.value) return;
		const addedDocRef = await db.collection("posts").add({
			message: inputRef.current.value,
			name: session.user.name,
			email: session.user.email,
			image: session.user.image,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		if (imageForPost) {
			const uploadTask = storage
				.ref(`posts/${addedDocRef.id}`)
				.putString(imageForPost, "data_url");

			removeImageFromPost();

			uploadTask.on(
				"state_change",
				null,
				error => console.error(error),
				async () => {
					//When the upload completes
					const imageUrl = await storage
						.ref("posts")
						.child(addedDocRef.id)
						.getDownloadURL();
					db.collection("posts")
						.doc(addedDocRef.id)
						.set({ postImage: imageUrl }, { merge: true });
				}
			);
		}

		inputRef.current.value = "";
	};

	const addImageToPost = e => {
		const reader = new FileReader();
		if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

		// When file successfully loads
		reader.onload = readerEvent => {
			setImageForPost(readerEvent.target.result);
		};
	};
	const removeImageFromPost = () => setImageForPost(null);
	return (
		<div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
			<div className="flex items-center space-x-4 p-4">
				<Image
					src={session.user.image}
					className="rounded-full transition duration-200 ease-in hover:opacity-70"
					width={40}
					height={40}
					layout="fixed"
				/>
				<form className="flex flex-1" onSubmit={sendPost}>
					<input
						className="rounded-full h-12 bg-gray-100 outline-none flex-grow px-5 hover:bg-gray-200"
						type="text"
						placeholder={`What's on your mind, ${session.user.name}?`}
						ref={inputRef}
					/>
				</form>
				{imageForPost && (
					<div className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
						<XCircleIcon
							className="h-5 text-black z-50 self-end transform translate-x-2"
							onClick={removeImageFromPost}
						/>
						<img
							className="h-12 object-contain"
							src={imageForPost}
							alt="Uploaded Image"
						/>
					</div>
				)}
			</div>
			<div className="flex justify-evenly border-t p-3">
				<div className="inputIcon">
					<VideoCameraIcon className="h-7 text-red-500" />
					<p className="text-xs sm:text-sm xl:text-base">
						Live Video
					</p>
				</div>
				<div
					className="inputIcon"
					onClick={() => fileInputRef?.current?.click()}>
					<CameraIcon className="h-7 text-green-400" />
					<p className="text-xs sm:text-sm xl:text-base">
						Photo/Video
					</p>
					<input
						type="file"
						hidden
						onChange={addImageToPost}
						ref={fileInputRef}
					/>
				</div>
				<div className="inputIcon">
					<EmojiHappyIcon className="h-7 text-yellow-300" />
					<p className="text-xs sm:text-sm xl:text-base">
						Feeling/Activity
					</p>
				</div>
			</div>
		</div>
	);
};

export default InputBox;
