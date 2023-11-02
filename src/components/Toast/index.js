import React, { useEffect, useState } from 'react'
import './index.css'

function NewToast({content}) {
    const [top, setTop] = useState('-5em');
    useEffect(() => {
        setTop('2em');
        setTimeout(() => {
            setTop('-5em');
        }, 2000);
    }, []);
    return (
        <div className='toast-container' style={{top}}>
            {content && <p className='toast-content'>{content}</p>}
        </div>
    )
}

const toast = {
    useMessage() {
        const [ toastContext, setToastContext ] = useState(null);
        const toastApi = {
            info(content) {
                if (toastContext === null) {
                    setToastContext(<NewToast content={content} />);
                    setTimeout(() => {
                        toastApi.close();
                    }, 2800);
                }
            },
            close() {
                setToastContext(null);
            }
        }
        return [toastApi, toastContext];
    }
    
}

export default toast