const Modal = () => (
  <div className="">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>
)

export default function Home() {
  return (
    <main className="relative flex min-h-screen justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <Modal />
    </main>
  )
}
