

const NamesList = props => {
    const babyNames = props.babyNames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));;
    return (

        // <div className="names-list">
        // {
        babyNames.map((babyName, index) => {
            if (babyName.sex === "m") {
                return (
                    <p className="name-list boys" key={index} onClick={props.favFunc}> {babyName.name}  </p>

                    // <div> <FaHeart /> {babyName.name}</div>
                )
            } else {
                return (
                    <p className="name-list girls" key={index} onClick={props.favFunc}> {babyName.name}</p>

                    // <p className="name-list girls" key={index} onClick={props.favFunc}> {babyName.name}</p>
                )
            }
        })
        // }

        // </div>

    )
}


export default NamesList