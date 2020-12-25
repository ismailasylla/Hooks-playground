import React, { useState } from 'react'
import { useForm } from '../useForm'

const PlayGround = () => {
	const [count, setCounter] = useState(0)
	const [values, handleChange] = useForm({ email: '', password: '' })

	return (
		<div>
			<div className='container'>
				<h1>Hooks Playground</h1>
				<h1>{count}</h1>
				<button
					className='btn btn-primary'
					onClick={() => setCounter(count + 1)}>
					Count +
				</button>
			</div>
			<div className='container mt-3'>
				<form className='form-group '>
					<div className='mb-3'>
						<input
							type='text'
							name='email'
							value={values.email}
							onChange={handleChange}
							className='form-control '
						/>
					</div>
					<div className='mb-3'>
						<input
							type='text'
							name='password'
							value={values.password}
							onChange={handleChange}
							className='form-control'
						/>
					</div>
				</form>
			</div>
		</div>
	)
}

export default PlayGround
