const Layout = (props) => {
    return(
        <main className="w-full h-screen bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80')]">
            <div className="w-full bg-dark bg-opacity-70 h-screen">
                {props.children}
            </div>
        </main>
    )
}

export default Layout;