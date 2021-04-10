import NamesList from "./NamesList";

const Favorites = (props) => {
    const favNames = props.favNames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));;
    return (
        <div>
            <p className="favourites-list" > Favourites: Click some names below to add to your shortlist...</p>,
            <div className="favourites-container" onClick={props.handleNamesReturn}>
                <NamesList babyNames={favNames} />
            </div>
        </div>
    )

}

export default Favorites