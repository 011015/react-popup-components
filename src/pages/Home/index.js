import React from "react"
import {alert, confirm, toast} from "../../../dist/index.min.js"

function Home() {
    const [alertApi, alertContext] = alert.useMessage();
    const handleAlert = () => {
        alertApi.info({
            title: 'tt',
            content: 'sfsdfsfasfsa',
            fn() {
                confirmApi.info({
                    title: 't',
                    content: 'sfasfsa',
                });
            }
        });
    }
    const [confirmApi, confirmContext] = confirm.useMessage();
    const handleConfirm = () => {
        confirmApi.info({
            title: 'tt',
            content: 'sfsdfsfasfsa',
            fn() {
                alertApi.info({
                    title: 't',
                    content: 'sfsfsa',
                    fn() {
                        console.log('alert true');
                    }
                });
            }
        });
    }
    const [toastApi, toastContext] = toast.useMessage();
    const handleToast = () => {
        toastApi.info('toast');
    }
    return (
        <>
            <h1>welcome Home!</h1>
            <button onClick={handleAlert}>click</button>
            <button onClick={handleConfirm}>confirm</button>
            <button onClick={handleToast}>toast</button>
            {alertContext}
            {confirmContext}
            {toastContext}
        </>
    )
}

export default Home