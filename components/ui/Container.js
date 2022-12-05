const Container = (props) => {
    return(
        <div className="container max-w-4xl m-auto">
            {props.children}
        </div>
    )
}

export default Container;