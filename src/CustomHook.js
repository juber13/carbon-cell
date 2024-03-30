// import React, { useEffect, useState } from 'react';

// const useCustomHook = ({ url }) => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await fetch(url);
//                 const jsonData = await res.json();
//                 setData(jsonData.data); // Update the state with the fetched data
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, [url]); // Include url in the dependency array to re-fetch data when url changes

//     return { data };
// };

// export default useCustomHook;
