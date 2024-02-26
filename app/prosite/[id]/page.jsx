// const Page = ({ params }) => {
// 	const [data, setData] = useState([]);



// 	const fetchf = async () => {
// 		try {
// 			const res = await axios.post(
// 				"https://work.grovyo.xyz/api/v1/getprosite",
// 				{
// 					username: decodeUsernameAndNumber(params.id),
// 				}
// 			);
// 			setData(res.data?.prosite);
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};

// 	console.log(data);

// 	useEffect(() => {
// 		fetchf();
// 	}, [params.id]);
// 	return (
// 		<>

// 			<div>
// 				<div dangerouslySetInnerHTML={{ __html: data }} />
// 			</div>

// 		</>
// 	);
// };

// export default Page;

"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function page({ params }) {
	const [data, setData] = useState();
	function decodeUsernameAndNumber(encodedString) {
		const decodedString = decodeURIComponent(encodedString);
		return decodedString;
	}
	const fetchData = async () => {
		try {

			// const res = await axios.get(
			// 	https://back.grovyo.xyz/api/getprositedetails/${params.id}
			// );
			// setBio(res.data.data.userDetails);
			const res = await axios.post(
				"https://work.grovyo.xyz/api/v1/getprosite",
				{
					username: decodeUsernameAndNumber(params.id),
				}
			);
			setData(res.data?.prosite);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, [params.id]);

	return (
		<div>

			<div>
				<div dangerouslySetInnerHTML={{ __html: data }} />
			</div>

		</div>
	);
}

export default page;