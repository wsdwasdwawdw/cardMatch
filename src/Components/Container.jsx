
function Container(){
    const create = () => {
        const input = document.querySelector('.input');
        const value = input.value;
        console.log(value);
    }
    
    return (
        <>
            <div className="flex gap-1">
                <input type="number" className="input border px-1"/>
                <button className="create border px-1">Create</button>
            </div>

            <div>
                
            </div>
        </>
    );
}

export default Container;