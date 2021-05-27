import React from 'react' 
import Link from './Link'

const ReportTable = ({ data, isCriteria, onClickLink }) => {
	const headers = Object.keys(data[0]) 
	return(
		<table className="table-auto text-left border-collapse w-full border">
			<thead>
				<tr>
					{
						headers.map(header => <th className="border"> { header } </th>)
					}
				</tr>
			</thead>
			<tbody>
				{ 
					data.map(row => 
						<tr>
						{
							Object.entries(row).map(entry =>{
								return isCriteria ===true && onClickLink !== null  && entry[1] > 0 ?
									<td className="border">
										<Link 
											text={ entry[0] === 'Location' ? entry[1].split(' ').join('-') :  entry[1]} 
											location={ row.Location }
											criteria={ entry[0] }
											onClickLink = { onClickLink } 
										/>
									</td> 
									: 
									<td className="border"> { entry[0] === 'Location' ? entry[1].split(' ').join('-') :  entry[1] } </td>
							})
						}
						</tr>
					)
				}
				
			</tbody>
		</table>
	)
}
export default ReportTable