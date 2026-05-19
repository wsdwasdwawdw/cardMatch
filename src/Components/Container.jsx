
function Container(){
    const demo = (color) => {
        if(color === "blue"){
            alert("div is blue");
        }
        else{
            alert("div is green");
        }
    }
    
    const shoot = () => {
        alert("this is an alert");
    }
    
    return (
        <>
            <div className="p-2 flex justify-center align-center border">
                <div onClick={() => demo("blue")} className="h-10 w-10 bg-blue-500"></div>
                <div onClick={() => demo("green")} className="h-10 w-10 bg-green-500"></div>
            </div>
            <button onClick={shoot}>this is an alert</button>
        </>
    );
}

export default Container;