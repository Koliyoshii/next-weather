import { TailSpin } from "react-loader-spinner";

const LoadingSpinner = () => {
    return(
        <div className="w-50 m-auto pt-5">
            <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
    )
}

export default LoadingSpinner;