const Shimmer = ({listLength}) => {
    return(
        <>
            <div className="cards-container">
            {Array(10).fill("").map((item,index) => <div className="shimmer-card" key={index}></div>)}
            </div>
        </>
    )
}

export default Shimmer