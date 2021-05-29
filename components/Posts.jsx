import { useContext } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";
import { PostsContext } from "../pages";

const Posts = () => {
	const [realtimePosts] = useCollection(
		db.collection("posts").orderBy("timestamp", "desc")
	);
	const posts = useContext(PostsContext);
	return (
		<div>
			<div>
				{realtimePosts
					? realtimePosts?.docs?.map(post => (
							<Post
								key={post.id}
								name={post.data().name}
								message={post.data().message}
								email={post.data().email}
								timestamp={post.data().timestamp}
								image={post.data().image}
								postImage={post.data().postImage}
							/>
					  ))
					: posts?.map(post => (
							<Post
								isServerRendered={true}
								key={post.id}
								name={post.name}
								message={post.message}
								email={post.email}
								timestamp={post.timestamp}
								image={post.image}
								postImage={post.postImage}
							/>
					  ))}
			</div>
		</div>
	);
};

export default Posts;
