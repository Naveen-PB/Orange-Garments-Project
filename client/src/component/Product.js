import React from 'react';

const SearchComponent = () => {
  return (
    <div className="mx-auto mt-5 w-screen max-w-screen-md py-20 leading-6">
      <form className="relative flex w-full flex-col justify-between rounded-lg border p-2 sm:flex-row sm:items-center sm:p-0">
        <div className="flex">
          <label className="focus-within:ring h-14 rounded-md bg-gray-200 px-2 ring-emerald-200" htmlFor="category">
            <select className="bg-transparent px-6 py-4 outline-none" name="category" id="category">
              <option value="All">All</option>
            </select>
          </label>
          <input
            type="text"
            name="search"
            defaultValue="ca"
            className="ml-1 h-14 w-full cursor-text rounded-md border py-4 pl-6 outline-none ring-emerald-200 sm:border-0 sm:pr-40 sm:pl-12 focus:ring"
            placeholder="City, Address, Zip :"
          />
        </div>
        <button
          type="submit"
          className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-md bg-emerald-500 px-10 text-center align-middle text-base font-medium normal-case text-white outline-none ring-emerald-200 ring-offset-1 sm:absolute sm:right-0 sm:mt-0 sm:mr-1 sm:w-32 focus:ring"
        >
          Search
        </button>
      </form>
      <div className="mt-4 divide-y rounded-b-xl border px-4 shadow-lg sm:mr-32 sm:ml-28">
        {["California", "Canada", "Cambodia", "Cameo", "Carville"].map((place, index) => (
          <div
            key={index}
            className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white"
          >
            <span className="m-0 font-medium">Ca</span> <span>{place.slice(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
