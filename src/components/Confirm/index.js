import React, { useState } from 'react'

import './index.css'

const confirm = {
    useMessage() {
        const [ confirmContext, setConfirmContext ] = useState(null);
        const confirmApi = {
            info(args) {
                const {title, content, fn} = args;
                setConfirmContext(
                    <div className='confirm-container'>
                        {title && <h3 className='confirm-title'>{title}</h3>}
                        {content && <p className='confirm-content'>{content}</p>}
                        <div className='confirm-button'>
                            <button onClick={
                                () => {
                                    fn && fn();
                                    confirmApi.close();
                                }
                            } className='confirm-button-confirm'>确定</button>
                            <button onClick={confirmApi.close} className='confirm-button-cancel'>取消</button>
                        </div>
                    </div>
                );
            },
            close() {
                setConfirmContext(null);
            }
        }
        return [confirmApi, confirmContext];
    }
}

export default confirm