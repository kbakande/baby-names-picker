import NamesList from "./NamesList";

const Favorites = (props) => {
    const favNames = props.favNames;
    return (
        <div className=".favourites-container">
            <p className="favourites-list"> Favourites: </p>
            <NamesList babyNames={favNames} />
        </div>
    )

}

export default Favorites