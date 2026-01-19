import React from 'react'
import "./Card.css"
export default function Card(props) {

	return (
		<div className='d-flex flex-wrap'>
			{
				props.UserData.map(function (Value, Index) {
					return <div className='UserCard gap-2 d-flex align-items-center' >
						<div className='Image'></div>
						<div className='UserDetails'>
							<div className='UserName'>{Value.firstName}</div>
							<div className='UserMail'>{Value.email}</div>
							<div className='UserOtherDetails'>
								<table>
									<tr>
										<th>Age</th>
										<th>Blood G.</th>
										<th>Eyes Color</th>
									</tr>
									<tr>
										<td>{Value.age}</td>
										<td>{Value.bloodGroup}</td>
										<td>{Value.eyeColor}</td>
									</tr>
								</table>
								<div className='d-flex gap-1'>

									<button className='btn btn-danger my-2 text-white'>Like</button>
									<button className='btn btn-success my-2 text-white'>Share</button>

								</div>
							</div>
						</div>
					</div>
				})
			}


		</div>
	)
}
