import React from "react";

const InputCard = () => {
	return (
		<div className='w-1/2 max-w-[800px] min-h-[250px] bg-white rounded-xl shadow-xl flex flex-col gap-4 items-center p-8'>
			<input
				className='w-full text-3xl font-black focus:outline-none'
				type='text'
				placeholder='Title'
			/>
			<textarea
				className='w-full text-lg focus:outline-none'
				placeholder='Write something specific...'
			/>
			<button className='self-end text-lg font-semibold mt-auto border px-6 py-2 rounded-lg border-gray-300 disabled:text-gray-300'>
				Save
			</button>
		</div>
	);
};

export default InputCard;
