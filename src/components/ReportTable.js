import React from 'react' 
import Link from './Link'

const ReportTable = ({ title, data, isCriteria, onClickLink }) => {
	if(data !== undefined && data !== null){
		const headers = Object.keys(data[0]) 
		return(
			<div >
				<h1 className=" w-full text-center text-white font-bold bg-black">{title}</h1>
				<div style={{"overflow": "auto", "display":"block"}} >
				<table className="table-auto text-left border-collapse w-full border">
					<thead>
						<tr>
							{
								headers.map((header, index) => <th className="border" key={"" + index}> { header } </th>)
							}
						</tr>
					</thead>
					<tbody>
						{ 
							data.map((row, rowIndex) => 
								<tr key={"" + rowIndex}>
								{
									Object.entries(row).map((entry, entryIndex) =>{
										return isCriteria ===true && onClickLink !== null  && entry[1] > 0 ?
											<td className="border" key={"" + entryIndex + rowIndex + 1}>
												<Link 
													text={ entry[0] === 'Location' ? entry[1].split(' ').join('-') :  entry[1]} 
													location={ row.Location }
													criteria={ entry[0] }
													onClickLink = { onClickLink } 
												/>
											</td> 
											: 
											<td className="border" key={"" + entryIndex + rowIndex + 1}> { entry[0] === 'Location' ? entry[1].split(' ').join('-') :  entry[1] } </td>
									})
								}
								</tr>
							)
						}
						
					</tbody>
				</table>
				</div>
			</div>
		)
	}
	return<div>No data available now</div>
}
export default ReportTable
