import React from 'react'

export default function TableBind(a) {
	//With Link (CDN)
	//With Package
	// console.log(a.Data)
	return (
		<div>

			<table className='table table-bordered table-dark table-hover table-striped'>
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
								<td>{index + 1}</td>
								<td>{Value.Name||Value.name}</td>
								<td>{Value.Address||Value.address.city}</td>
								<td>{Value.Phone||Value.phone}</td>
							</tr>
						})
					}
				</tbody>
			</table>
		</div>
	)
}
