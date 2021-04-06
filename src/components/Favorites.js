import NamesList from "./NamesList";

const Favorites = (props) => {
    const favNames = props.favNames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));;
    return (
        <div className=".favourites-container" onClick={props.handleNamesReturn}>
            <p className="favourites-list"> Favourites: </p>
            <NamesList babyNames={favNames} />
        </div>
    )

}

export default Favorites