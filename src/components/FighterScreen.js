const FighterScreen = ({isVisible, setVisible, selectedCharacter}) => {
    return (
        < div onClick={() => {setVisible(false)}} className="fighter-screen" style={{display: isVisible ? "block" : "none"}} >
            <h2>{selectedCharacter.name}</h2>
            <img width="100" height="100" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/main.png`} />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt in laboriosam quo atque, error dolorem vel ex labore quasi corrupti sed magnam eos praesentium quidem autem. Necessitatibus, dolor. Impedit, laborum?
            </p>
        </div >
    )
}

export default FighterScreen