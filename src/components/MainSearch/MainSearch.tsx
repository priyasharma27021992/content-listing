
const MainSearch = () => {
  return (
    <section className="w-full">
        <h1>Save upto 40% on your next hotel stay</h1>
        <h2>We compare hotel prices from over 100 sites</h2>

        <form className="flex flex-row shadow-md">
            <input className="border-2 px-4 py-2 basis-2/5"/>
            <input className="border-2 px-4 py-2 basis-1/5"/>
            <input className="border-2 px-4 py-2 basis-1/5"/>
            <button type="submit" className="basis-1/5 border">Submit</button>
        </form>
    </section>
  )
}

export { MainSearch}