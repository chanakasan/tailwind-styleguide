export default ({ label, children, ...rest }) => {
	const _label = label || children
	const className = `
bg-sky-500 hover:bg-sky-600 active:bg-sky-700 
focus:outline-none focus:ring focus:ring-violet-300
px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white
`

	const props = {
    type: 'button',
		className,
		...rest
	}

	return (
		<button {...props}>
			{_label}
		</button>
	)
}
