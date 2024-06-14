export const SpinnerLoading = () => {
    return (
        <div className="container text-center"
        style={{height: 550, marginTop: '25vh'}}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">
                    Loading...
                </span>
            </div>
        </div>
    )
}