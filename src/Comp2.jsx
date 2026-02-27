import React from 'react'
import Comp3 from './Comp3'

export default function Comp2(prpos) {

	return (
		<div>Comp2

			{/* <table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>



				</tbody>

			</table> */}

			
			<Comp3 myData={prpos.myData} />

		</div>
	)
}
