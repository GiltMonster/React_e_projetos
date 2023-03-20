
export default function Header(){
    return(
        
        <div className="bg-dark border">

            <div className="row align-items-center text-white" style={{height: '100px', width:'100'}}>
            <div className="col-9 text-start">
                    <h1>MeuTube</h1>
                </div>
                <div className="col-3 text-end">
                    <h1>Meus videos</h1>
                </div>
            </div>
        </div>
    )
}