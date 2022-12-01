const Container = (props) => {
    return(
        <div className="container m-auto">
            {props.children}
        </div>
    )
}

export default Container;