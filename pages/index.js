import BaseLayout from "layouts";
import HomePageSections from "sections/HomePageSections";
// import dynamic from "next/dynamic";

// const HomePageSections = dynamic(() => import("sections/HomePageSections"), {
// 	ssr: false,
// });

export default function Home() {
	return (
		<BaseLayout>
			<HomePageSections />
		</BaseLayout>
	);
}
