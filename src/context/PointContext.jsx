import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const PointContext = createContext();

export function PointProvider({ children }) {

    const [points, setPoints] = useState(1000);
    const MySwal = withReactContent(Swal)
    
    let userName = 'Maxi Rebolo';

    const buy = (price) => {
        if (points < price) {
            const Toast = MySwal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', MySwal.stopTimer)
                  toast.addEventListener('mouseleave', MySwal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'error',
                title: "you don't have enough points"
              })
        } else {
            setPoints(points - price)

            const Toast = MySwal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', MySwal.stopTimer)
                  toast.addEventListener('mouseleave', MySwal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Purchased'
              })
        }
    }

    return (
        <PointContext.Provider value={{ userName, points, buy }}>
            {children}
        </PointContext.Provider>
    )
}
