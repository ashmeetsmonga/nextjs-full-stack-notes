import InputCard from "./components/InputCard";

export default function Home() {
	return (
		<main className='flex w-screen bg-slate-900 min-h-screen flex-col items-center'>
			<div className='w-full h-[500px] flex justify-center items-center'>
				<InputCard />
			</div>
		</main>
	);
}
