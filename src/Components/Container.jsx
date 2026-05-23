
function Container(){

    const create = () => {
        const input = document.querySelector('input');
            let value = input.value;
            if(value % 2 === 0){
                alert("Even number detected!");
                console.log("Even number found");
                value = "";
            }
            else{
                alert("Please enter an even number.");
            }
    };

    const che = () => {
        alert("this is a text field");
    };

    return (
        <>
            <div className="flex gap-1">
                <input type="number" className="input border px-1" onClick={che}/>
                <button className="create border px-1" onClick={create} title="Create">
                    Create
                </button>
            </div>

            <div>
                
            </div>
        </>

        
    );
    
}

export default Container;