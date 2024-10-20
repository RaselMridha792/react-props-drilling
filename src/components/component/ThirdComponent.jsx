const ThirdComponent = (country) => {
    const {currencies, population} = country;

    let currencyCode = '';
    if(currencies){
        for(const currency in currencies){
            currencyCode = currency;
            
        }
    }


  return (
    <>
      <div className="py-2">
        <hr />
        <p>for more info</p>
        <p>currencies: {currencyCode}</p>
        <p>population: {population}</p>
      </div>
    </>
  );
};

export default ThirdComponent;
