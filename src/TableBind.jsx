import React from 'react'

export default function TableBind(a) {

	// console.log(a.Data)
	return (
		<div>

			<table border={"1"}>
				<thead>
					<tr>
						<th>Sr No.</th>
						<th>Name</th>
						<th>Address</th>
						<th>Phone</th>
					</tr>
				</thead>
				<tbody>
					{/* <tr>
						<td>1</td>
						<td>Name</td>
						<td>Address</td>
						<td>Phone</td>
					</tr> */}
					{
						a.Data.map(function (Value, index) {
							console.log(Value)

							return <tr>
								<td>{index+1}</td>
								<td>{Value.Name}</td>
								<td>{Value.Address}</td>
								<td>{Value.Phone}</td>
							</tr>
						})
					}
				</tbody>
			</table>
		</div>
	)
}
