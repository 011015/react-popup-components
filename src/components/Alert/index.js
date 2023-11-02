import React, { useState } from 'react'

import './index.css'

const alert = {
    useMessage() {
        const [ alertContext, setAlertContext ] = useState(null);
        const alertApi = {
            info(args) {
                const {title, content, fn} = args;
                setAlertContext(
                    <div className='alert-container'>
                        {title && <h3 className='alert-title'>{title}</h3>}
                        {content && <p className='alert-content'>{content}</p>}
                        <button onClick={
                            () => {
                                fn();
                                alertApi.close();
                            }
                        } className='alert-button-confirm'>确定</button>
                    </div>
                );
            },
            close() {
                setAlertContext(null);
            }
        }
        return [alertApi, alertContext];
    }
}

export default alert