
const NamesList = props => {
    const babyNames = props.babyNames;
    return (
        babyNames.map((babyName, index) => {
            if (babyName.sex === "m") {
                return (
                    <p className="name-list boys" key={index}> {babyName.name} </p>
                )
            } else {
                return (
                    <p className="name-list girls" key={index}> {babyName.name} </p>
                )
            }
        })

    )
}

export default NamesList