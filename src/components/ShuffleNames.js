import NamesList from "./NamesList";

const Shuffle = (props) => {
    const shuffledNames = shuffleArray(props.favNames);
    return (
        <div className="favourites-container" onClick={props.handleNamesReturn}>
            <p className="favourites-list"> Favourites: </p>
            <NamesList babyNames={shuffledNames} />
        </div>
    )

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
export default Shuffle