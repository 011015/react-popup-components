import React, { useState } from 'react'

import './index.css'

const confirm = {
    useMessage() {
        const [ confirmContext, setConfirmContext ] = useState(null);
        const confirmApi = {
            info(args) {
                const {title, content, fn} = args;
                setConfirmContext(
                    <div className='lhq-confirm-shroud'>
                        <div className='lhq-confirm-container'>
                            {title && <h3 className='lhq-confirm-title'>{title}</h3>}
                            {content && <p className='lhq-confirm-content'>{content}</p>}
                            <div className='lhq-confirm-button'>
                                <button onClick={
                                    () => {
                                        fn && fn();
                                        confirmApi.close();
                                    }
                                } className='lhq-confirm-button-confirm'>确定</button>
                                <button onClick={confirmApi.close} className='lhq-confirm-button-cancel'>取消</button>
                            </div>
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