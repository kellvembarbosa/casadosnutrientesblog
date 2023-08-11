import React from 'react'
import { PacmanLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className='min-h-screen'>
            <PacmanLoader color="white" cssOverride={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}></PacmanLoader>
        </div>
    )
}

export default Loader