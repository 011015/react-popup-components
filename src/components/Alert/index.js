import React, { useState } from 'react'

import './index.css'

const alert = {
    useMessage() {
        const [ alertContext, setAlertContext ] = useState(null);
        const alertApi = {
            info(args) {
                const {title, content, fn} = args;
                setAlertContext(
                    <div className='lhq-alert-shroud'>
                        <div className='lhq-alert-container'>
                            {title && <h3 className='lhq-alert-title'>{title}</h3>}
                            {content && <p className='lhq-alert-content'>{content}</p>}
                            <button onClick={
                                () => {
                                    fn && fn();
                                    alertApi.close();
                                }
                            } className='lhq-alert-button-confirm'>确定</button>
                        </div>
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