import { Link, useNavigate } from 'react-router-dom'

function Container() {
    const navigate = useNavigate()

    const create = () => {
        const input = document.querySelector('input')
        if (!input) return

        let value = Number(input.value)
        if (value % 2 === 0) {
            alert('Even number detected!')
            console.log('Even number found')
            input.value = ''
        } else {
            alert('Please enter an even number.')
        }
    }

    const che = () => {
        alert('this is a text field')
    }

    const handleLogin = (event) => {
        event.preventDefault()

        const isSuccess = true

        if (isSuccess) {
            navigate('/medium')
        }
    }

    return (
        <>
            <div className="flex gap-1">
                <input type="number" className="input border px-1" onClick={che} />
                <button className="create border px-1" onClick={create} title="Create">
                    Create
                </button>
            </div>

            <div className="container mt-2 border p-2 flex gap-1">
                <Link to="/easy">Easy Mode</Link>
                <Link to="/medium">Medium Mode</Link>
            </div>

            <button className="login border px-1 mt-2" onClick={handleLogin}>
                Login
            </button>
        </>
    )
}

export default Container