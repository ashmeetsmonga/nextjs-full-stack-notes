"use client";
import React, { useState } from "react";

const InputCard = () => {
	const [title, setTitle] = useState<string>("");
	const [desc, setDesc] = useState<string>("");

	return (
		<div className='w-1/2 max-w-[800px] min-h-[250px] bg-white rounded-xl shadow-xl flex flex-col gap-4 items-center p-8'>
			<input
				className='w-full text-3xl font-black focus:outline-none'
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Title'
			/>
			<textarea
				className='w-full text-lg focus:outline-none'
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
				placeholder='Write something specific...'
			/>
			<button
				disabled={!title || !desc}
				className='self-end text-lg font-semibold mt-auto border px-6 py-2 rounded-lg border-gray-300 disabled:text-gray-300'
			>
				Save
			</button>
		</div>
	);
};

export default InputCard;
