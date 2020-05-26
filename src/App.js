import React, { useState, useEffect, lazy, Suspense } from "react";
import Loader from "./elements/Loader";

const SectionHero = lazy(() => import("components/SectionHero"));
const SectionWork = lazy(() => import("components/SectionWork"));
const SectionAbout = lazy(() => import("components/SectionAbout"));
const SectionFooter = lazy(() => import("components/SectionFooter"));

function App() {
	const [calculate, setCalculate] = useState(0);

	useEffect(() => {
		onScrollHandle();
	}, []);

	const onScrollHandle = () => {
		window.addEventListener("scroll", () => {
			let calc;

			if (window.scrollY < 600) calc = window.scrollY / 10.2 + `%`;

			setCalculate(calc);
		});
	};

	let overflow = {
		overflow: "hidden",
	};

	return (
		<div style={overflow}>
			<Suspense fallback={Loader()}>
				<SectionHero calculate={calculate} />
				<SectionAbout />
				<SectionWork />
				<SectionFooter />
			</Suspense>
		</div>
	);
}

export default App;
