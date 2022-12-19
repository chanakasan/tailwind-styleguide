import Button from './button'

export default function Buttons() {
  return (
		<>
		  <div className="mb-10">
        <Button type="primary" onClick={() => alert('hi')}>
          Hello
        </Button>
		  </div>

			<div className="flex justify-center">
				<button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 
								hover:text-white hover:bg-purple-600 hover:border-transparent 
								focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
					Message
				</button>

				<button className="bg-sky-500 hover:bg-sky-700 
									px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
					Save changes
				</button>

				<button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 
											focus:outline-none focus:ring focus:ring-violet-300
											px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
					Save changes
				</button>
			</div>
    </>
  )
}

