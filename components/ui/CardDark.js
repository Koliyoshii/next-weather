const CardDark = (props) => {
    return(
        <div className="relative bg-dark/50 p-50 flex flex-col justify-between w-full m-auto p-4 mt-5 rounded-2xl">
            {props.children}
        </div>
    )
}

export default CardDark;