const Favorites = (props) => {
    const favNames = props.favNames;
    return (
        <div className=".favourites-container">
            <p className="favourites-list"> Favourites: </p>
            { favNames.map((favName, index) => {
                return <p key={index}> {favName.name} </p>
            })
            }
        </div>
    )

}

export default Favorites