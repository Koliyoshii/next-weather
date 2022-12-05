import { Fragment } from "react";
import MainMenu from "./MainMenu";

const Layout = (props) => {
  return (
    <Fragment>
      
    <MainMenu />

      <main className="w-full h-screen bg-center bg-fixed bg-cover bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80')]">
        <div></div>
        <div className="w-full h-screen bg-dark bg-opacity-60 overflow-auto">
            <div className="pt-32 pb-32">
               {props.children} 
            </div>
          
        </div>
      </main>
    </Fragment>
  );
};

export default Layout;
