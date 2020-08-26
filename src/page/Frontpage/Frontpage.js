import React, { useState, useEffect, lazy, Suspense } from "react";
import Loader from "../../components/Loader";

const SectionHero = lazy(() => import("components/Hero"));
const SectionWork = lazy(() => import("components/Work"));
const SectionAbout = lazy(() => import("components/About"));
const SectionFooter = lazy(() => import("components/Footer"));

function App() {
	const [calculate, setCalculate] = useState(0);

	useEffect(() => {
		onScrollHandle();
	}, []);

	const onScrollHandle = () => {
		window.addEventListener("scroll", () => {
			let calc;

			if (window.scrollY < 600) {
				calc = window.scrollY / 10.2 + `%`;
			}

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
