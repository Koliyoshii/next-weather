import { TailSpin } from "react-loader-spinner";

const LoadingSpinner = () => {
    return(
        <div className="flex justify-center pt-4">
            <TailSpin
            height="80"
            width="80"
            color="#0096FF"
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