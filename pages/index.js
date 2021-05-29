import { getSession } from "next-auth/client";
import { createContext } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Meta from "../components/Meta";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export const PostsContext = createContext();

export default function Home({ session, posts }) {
	return session ? (
		<div className="h-screen bg-gray-100 overflow-hidden">
			<Meta />

			{/* Header */}
			<Header />

			<main className="flex">
				{/* SideBar */}
				<Sidebar />
				{/* Feed */}
				<PostsContext.Provider value={posts}>
					<Feed />
				</PostsContext.Provider>
				{/* Widgets */}
				<Widgets />
			</main>
		</div>
	) : (
		<Login />
	);
}

export const getServerSideProps = async ctxt => {
	//Get the user
	const session = await getSession(ctxt);
	const postsQuerySnapshot = await db
		.collection("posts")
		.orderBy("timestamp", "desc")
		.get();
	const posts = postsQuerySnapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data(),
		timestamp: doc.data().timestamp.toDate().toLocaleString(),
	}));
	return {
		props: { session, posts },
	};
};
