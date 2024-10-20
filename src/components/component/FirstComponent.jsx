import { useEffect } from "react";
import { useState } from "react";
import SecondComponent from "../SecondComponent";
const FirstComponent = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        const loadData = async () =>{
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data);
        }
        loadData();
    }, [])

    return (
        <>
        <h1 className="lg:text-5xl text-bold uppercase py-5">All Country Data</h1>
        <hr />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 py-5">
            {
                countries.map(country =><SecondComponent 
                    key={country.cca2}
                    country={country}></SecondComponent>)
            }
        </div>
        </>
    );
};

export default FirstComponent;