import StoryCard from "./StoryCard";

const stories = [
	{
		name: "Raunak Kedia",
		src: "/users/raunak.png",
		profile: "/avatars/raunak.png",
	},
	{
		name: "Elon Musk",
		src: "/users/elon_musk.jpg",
		profile: "/avatars/elon_musk.jpg",
	},
	{
		name: "Jeff Bezos",
		src: "/users/jeff-bezos-richest-man-2018.jpg",
		profile: "/avatars/jeff-bezos.jpg",
	},
	{
		name: "Mark Zuckerberg",
		src: "/users/mark_zuckerberg.jpg",
		profile: "/avatars/mark_zuckerberg.jpg",
	},
	{
		name: "Bill Gates",
		src: "/users/bill_gate.jpg",
		profile: "/avatars/bill_gate.jpg",
	},
];

const Stories = () => {
	return (
		<div className="flex justify-center space-x-3 mx-auto">
			{stories.map(story => (
				<StoryCard
					key={story.src}
					src={story.src}
					profile={story.profile}
					name={story.name}
				/>
			))}
		</div>
	);
};

export default Stories;
