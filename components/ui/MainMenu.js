import Link from "next/link";
import React from "react";

import Button from "./Button";

function MainMenu() {
  return (
    <header className="w-full m-0 fixed top-0 left-0 h-28 bg-dark/90 z-10">
      <nav className="flex flex-row h-28 max-w-4xl m-auto ">
        <div className="w-1/3 flex flex-row items-center h-28 max-w-4xl ">
          <Link href={"/"}>
            <h1 className="text-light font-bold text-2xl">Next Weather App</h1>
          </Link>
        </div>
        <div className="flex flex-col items-end h-28 max-w-4xl w-2/3">
          <div className="flex flex-row items-center h-28">
            <ul className="flex flex-row items-center justify-end  gap-6">
              <Link className="text-light font-semibold text-lg hover:text-lightblue hover:scale-110 ease-in duration-100" href={"/"}>
                Startseite
              </Link>
              <Link className="text-light font-semibold text-lg hover:text-lightblue hover:scale-110 ease-in duration-100" href={"/"}>
                Meine Städte
              </Link>
              <Button title={"Login"} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainMenu;
