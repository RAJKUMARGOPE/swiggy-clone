import React, { useEffect, useState } from 'react'
import Carditem from './Carditem'
import Shimmer_Ui from './Shimmer_Ui'

const Body = () => {
    const [allrestdata, setAllResdata] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filterList, setFilterList] = useState([])

    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setAllResdata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    useEffect(() => {
        fetchdata()
    }, [])
    const handelTopratedrest = () => {
        const filterdata = allrestdata.filter((items) => items.info.avgRating > 4)
        setFilterList(filterdata)
    }


    const handelsearch = () => {
        const searchdata = allrestdata.filter((value) => value.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilterList(searchdata)
        
    }
    const handelallrest=()=>{
       setFilterList(allrestdata)
    }
    return filterList.length === 0? <Shimmer_Ui/>:(
        <div className='mx-28'>
            <div className='flex'>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="search"
                    name="search"
                    value={searchText}
                    id="search"
                    placeholder="Search..."
                    className="w-full mt-10 py-2 text-blue-700 border border-collapse border-gray-400 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                />
                <div className='mt-10 ml-1'>
                    <button className='p-2  bg-blue-400 rounded-lg w-28' onClick={handelsearch}>Search</button>
                </div>
            </div>
            <button
                className='p-2 bg-blue-400 rounded-lg'
                onClick={handelTopratedrest}
            >TopRated
            </button>
            <button className='p-2 bg-blue-400 rounded-lg mx-5 my-4' onClick={handelallrest} >All Restorant</button>
            <div className=' flex flex-wrap  mt-7 cursor-pointer '>
                {filterList && filterList.map((item) =>
                    <Carditem key={item.info.id} resp={item}

                    />
                )}
            </div>
        </div>
    )
}

export default Body