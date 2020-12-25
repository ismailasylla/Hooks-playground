import { useState } from 'react'

export const useForm = (initalValues) => {
	const [values, setValues] = useState(initalValues)

	return [
		values,
		(e) => {
			setValues({
				...values,
				[e.target.name]: e.target.value,
			})
		},
	]
}
