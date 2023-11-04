import React from "react"

import {alert, confirm, toast} from "@components"
import './index.css'

function App() {
    const [alertApi, alertContext] = alert.useMessage();
    const handleAlert = () => {
        alertApi.info({
            title: 'title',
            content: 'content',
            fn() {
                window.alert('fn');
            }
        });
    }
    const [confirmApi, confirmContext] = confirm.useMessage();
    const handleConfirm = () => {
        confirmApi.info({
            title: 'title',
            content: 'content',
            fn() {
                window.confirm('fn');
            }
        });
    }
    const [toastApi, toastContext] = toast.useMessage();
    const handleToast = () => {
        toastApi.info('content');
    }
    return (
        <div className="container">
            <div className="title">
                <h1>react-popup-components</h1>
                <h3>一款 React 弹窗组件库</h3>
                <p>欢迎来到在线体验！</p>
            </div>
            <div className="main">
                <div className="alert">
                    <p className="alert-title">Alert</p>
                    <button className="alert-button" onClick={handleAlert}>点击我，体验alert</button>
                </div>
                <div className="confirm">
                    <p className="confirm-title">Confirm</p>
                    <button className="confirm-button" onClick={handleConfirm}>点击我，体验confirm</button>
                </div>
                <div className="toast">
                    <p className="toast-title">Toast</p>
                    <button className="toast-button" onClick={handleToast}>点击我，体验toast</button>
                </div>
            </div>
            {alertContext}
            {confirmContext}
            {toastContext}
        </div>
    )
}

export default App