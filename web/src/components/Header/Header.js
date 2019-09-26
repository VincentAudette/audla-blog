export default () => {
  return (
    <header className="flex items-center border-b-4 border-indigo-300 bg-indigo-600 text-white pl-4 pr-8 py-12 ">
      <div className="flex flex-1">
        <div className="mt-1">
          <h1>
            <a href="/" className="text-5xl font-semibold leading-none">
              Hammer Review
            </a>
          </h1>
          <h2 className="text-base -mt-1 font-light text-indigo-200">All the hammers</h2>
        </div>
      </div>
      <nav>
        <ul className="flex">
          <li className="mx-4 font-semibold uppercase">
            <a href="/about" className="text-indigo-200 hover:text-indigo-800">
              About
            </a>
          </li>
          <li className="mx-4 font-semibold uppercase">
            <a href="/contact" className="text-indigo-200 hover:text-indigo-800">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
