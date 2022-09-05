// import React, {useState, useEffect} from "react";

// function Weather() {


// const [apiData, setApiData] = useState({});
// const [getState, setGetState] = useState('');
// const [state, setState] = useState('');

// // API KEY AND URL
// // const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a02c7f7639ade982a61f32c928f76c34`;
// const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?=${state}&appid=a02c7f7639ade982a61f32c928f76c34`;

// // Side effect
// useEffect(() => {
//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then((data) => setApiData(data));
//   }, [apiUrl]);

//   const inputHandler = (event: any) => {
//     setGetState(event.target.value);
//   };
  
//   const submitHandler = () => {
//     setState(getState);
//   };
  
//   const kelvinToFarenheit = (k: number) => {
//     return (k - 273.15).toFixed(2);
//   };

//   return (
//     <div className="App">
//       <header className="">
//         <h2>React Weather App</h2>
//       </header>
//       <div className="">
//         <div className="">
//           <div>
//             <label>
//               Enter Location :
//             </label>
//           </div>
//           <div>
//             <input
//               type="text"
//               id="location-name"
//               onChange={inputHandler}
//               value={getState}
//             />
//           </div>
//           <button className="btn btn-primary mt-2" onClick={submitHandler}>
//             Search
//           </button>
//         </div>
  
//         <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
//           {apiData.main ? (
//             <div>
//               <img
//                 src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
//                 alt="weather status icon"
//                 className="weather-icon"
//               />
  
//               <p>
//                 {kelvinToFarenheit(apiData.main.temp)}&deg; C
//               </p>
  
//               <p>
//                 <i></i>{' '}
//                 <strong>{apiData.name}</strong>
//               </p>
  
//               <div>
//                 <div>
//                   <p>
//                     <i></i>{' '}
//                     <strong>
//                       {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
//                     </strong>
//                   </p>
//                   <p>
//                     <i className="fas fa-temperature-high"></i>{' '}
//                     <strong>
//                       {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
//                     </strong>
//                   </p>
//                 </div>
//                 <div className="col-md-6">
//                   <p>
//                     {' '}
//                     <strong>{apiData.weather[0].main}</strong>
//                   </p>
//                   <p>
//                     <strong>
//                       {' '}
//                       {countries.getName(apiData.sys.country, 'en', {
//                         select: 'official',
//                       })}
//                     </strong>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <h1>Loading</h1>
//           )}
//         </div>
//       </div>
//       <footer className="footer">
//         <code>
//           Created by{' '}
//           <a href="https://github.com/imshines" target="none">
//             imshines
//           </a>{' '}
//           using React
//         </code>
//       </footer>
//     </div>
//   );
// }

// export default Weather;