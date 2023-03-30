// import React from 'react'

// type props={
//     variant?: 'success' | 'danger' | 'info',
//     children: React.ReactNode
// }
// export default function MessageBox(props: props) {
//     return (
//         <div className={`alert alert-${props.variant || 'info'}`}>
//             {props.children}
//         </div>
//     )
// }

// import React, { useEffect, useState } from 'react';

// type props={
//     variant?: 'success' | 'danger' | 'info',
//     children: React.ReactNode
// }

// export default function MessageBox(props: props) {
//     const [isVisible, setIsVisible] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsVisible(false);
//         }, 2000);

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <>
//             {isVisible && (
//                 <div className={`alert alert-${props.variant || 'info'}`}>
//                     {props.children}
//                 </div>
//             )}
//         </>
//     )
// }

import React, { useEffect, useState } from 'react';

type props={
    variant?: 'success' | 'danger' | 'info',
    children: React.ReactNode
}

export default function MessageBox(props: props) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (props.variant === 'info') {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [props.variant]);

    return (
        <>
            {isVisible && (
                <div className={`alert alert-${props.variant || 'info'}`}>
                    {props.children}
                </div>
            )}
        </>
    )
}

