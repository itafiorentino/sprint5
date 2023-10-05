function Card({data}){

    return (
        <div>
        <div style={{backgroundColor: data.bgColor}}>
            <img src={data.image} alt={data.title}/>
            </div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        </div>

    );
  };

export default Card