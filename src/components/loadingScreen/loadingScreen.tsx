import '../../assets/styles/components/loadingScreen/styleLoadingScreen.css'

export function LoadinScreen () {
    return (
        <div className="loader-content">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}