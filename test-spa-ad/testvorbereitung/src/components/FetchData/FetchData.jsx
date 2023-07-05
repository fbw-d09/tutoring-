import React, { useEffect, useState } from 'react';

import './FetchData.scss';

export const FetchData = ({ className, ...props }) =>
{
	// erst importieren wir useState 
	// Daten Typ ist Array weil wenn wir fetchen, bekommen wir ein Array als res 

	const [data,setData] = useState({}); 
	const [click,setClick] = useState(null);

	useEffect (()=> {
		
		const fetchData = async () => {
		const items = await ((await fetch ('https://jsonplaceholder.typicode.com/todos/1'))).json();
		setData(items)	
		console.log(data);
		}
		
		fetchData();
	},[click]); 
	
	return (
		<div className={`FetchData ${ className !== undefined ? className : "" }`}>
			<p>{data.title}</p>
			<button onClick={() => setClick(click + 1)}> fetchdata </button>
		</div>
	)
}
