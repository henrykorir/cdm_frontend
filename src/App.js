import ReportTable from './components/ReportTable'
const rows = [
{
Month: "2021-5",
Location: "Location 3",
"New Hypertensive": 4,
"Known Hypertensive": 0,
"New Diabetic": 2,
"Known Diabetic": 1,
"Hypertensive and Diabetic": 2
},
{
Month: "2021-5",
Location: "Location 4",
"New Hypertensive": 1,
"Known Hypertensive": 0,
"New Diabetic": 1,
"Known Diabetic": 1,
"Hypertensive and Diabetic": 1
},
{
Month: "2021-5",
Location: "Location 8",
"New Hypertensive": 2,
"Known Hypertensive": 4,
"New Diabetic": 0,
"Known Diabetic": 1,
"Hypertensive and Diabetic": 1
},
{
Month: "2021-5",
Location: "Location 11",
"New Hypertensive": 1,
"Known Hypertensive": 0,
"New Diabetic": 1,
"Known Diabetic": 0,
"Hypertensive and Diabetic": 0
},
{
Month: "2021-5",
Location: "Location 71",
"New Hypertensive": 0,
"Known Hypertensive": 20,
"New Diabetic": 0,
"Known Diabetic": 20,
"Hypertensive and Diabetic": 3
},
{
Month: "2021-5",
Location: "Location 73",
"New Hypertensive": 2,
"Known Hypertensive": 0,
"New Diabetic": 0,
"Known Diabetic": 0,
"Hypertensive and Diabetic": 0
},
{
Month: "2021-5",
Location: "Location 84",
"New Hypertensive": 2,
"Known Hypertensive": 5,
"New Diabetic": 4,
"Known Diabetic": 9,
"Hypertensive and Diabetic": 7
},
{
Month: "2021-5",
Location: "Location 92",
"New Hypertensive": 1,
"Known Hypertensive": 0,
"New Diabetic": 0,
"Known Diabetic": 1,
"Hypertensive and Diabetic": 1
},
{
Month: "2021-5",
Location: "Location 125",
"New Hypertensive": 1,
"Known Hypertensive": 1,
"New Diabetic": 0,
"Known Diabetic": 1,
"Hypertensive and Diabetic": 1
},
{
Month: "2021-5",
Location: "Location 132",
"New Hypertensive": 1,
"Known Hypertensive": 0,
"New Diabetic": 0,
"Known Diabetic": 1,
"Hypertensive and Diabetic": 1
},
{
Month: "2021-5",
Location: "Location 190",
"New Hypertensive": 3,
"Known Hypertensive": 0,
"New Diabetic": 0,
"Known Diabetic": 0,
"Hypertensive and Diabetic": 0
},
{
Month: "2021-5",
Location: "Location 221",
"New Hypertensive": 1,
"Known Hypertensive": 0,
"New Diabetic": 0,
"Known Diabetic": 0,
"Hypertensive and Diabetic": 0
},
{
Month: "2021-5",
Location: "Location 271",
"New Hypertensive": 0,
"Known Hypertensive": 0,
"New Diabetic": 1,
"Known Diabetic": 0,
"Hypertensive and Diabetic": 0
},
{
Month: "2021-5",
Location: "Location 272",
"New Hypertensive": 1,
"Known Hypertensive": 0,
"New Diabetic": 0,
"Known Diabetic": 1,
"Hypertensive and Diabetic": 1
},
{
Month: "2021-5",
Location: "Location 298",
"New Hypertensive": 10,
"Known Hypertensive": 0,
"New Diabetic": 0,
"Known Diabetic": 0,
"Hypertensive and Diabetic": 0
}
]
const App = () => {
	const handleLinkClick = ( data ) => {
		console.log(data)
	}
  return (
    <div className="min-w-full min-h-screen w-full flex justify-center bg-grey-800">
           <ReportTable data={rows} isCriteria={true} onClickLink={handleLinkClick} />
     </div>
  );
}

export default App;
