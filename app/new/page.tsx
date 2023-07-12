import { create } from "./actions";

export default async function New() {
  return (
    <>
      <div className="flex gap-3 ml-4">
      <a
        href="/"
        className="bg-gray-900 text-lg text-white w-28 h-8 flex justify-center"
      >
        <button type="submit">Home</button>
      </a>
      <a
        href="/view"
        className="bg-gray-900 text-lg text-white  w-28 h-8 flex justify-center"
      >
        <button type="submit">view</button>
      </a>
      </div>
    <div
      className="flex justify-center justify-items-center"
      style={{ height: "80vh" }}
    >
      <main
        className="flex justify-center justify-items-center shadow-2xl "
        style={{ height: "80vh", width: "80vw" }}
      >
        <form
          action={create}
          className="flex flex-col justify-center content-center gap-4"
        >
          <label htmlFor="name" className="text-3xl">
            Todo :{" "}
          </label>
          <input
            id="name"
            name="todo"
            type="text"
            className=" text-slate-900 h-12 p-4 md:text-xl  md:w-80"
            style={{ borderRadius: "0.5rem" }}
          />
          <button
            type="submit"
            className="bg-blue-500 text-lg text-white rounded-xl h-10"
          >
            Create
          </button>
        </form>
      </main>

    </div>
    </>
  );
}
