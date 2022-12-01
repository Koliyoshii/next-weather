import { BsSearch } from "react-icons/bs";

const SearchForm = (props) => {


    return(
        <div className="flex justify-between max-w-[500px] w-full m-auto pt-4 text-light">
        <form onSubmit={props.onSearch} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl">
          <div>
            <input onChange={props.onCityChange} className="w-100 bg-transparent border-none text-light focus:outline-none text-2xl" type="text" placeholder="Stadt eingeben" />
          </div>
          <button type="submit">
            <BsSearch size={20}/>
          </button>
        </form>
      </div>
    )
}

export default SearchForm;