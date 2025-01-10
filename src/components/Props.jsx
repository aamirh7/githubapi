import React from 'react'
import { data } from './data'

export default function First() {
    return (
        <div className='flex flex-wrap gap-4 justify-center'>
            {/* <PropsComponents title="mojombo"
                avatar="https://avatars.githubusercontent.com/u/1?v=4"
                githuburl="https://github.com/mojombo" />
            <PropsComponents title="defunkt"
                avatar="https://avatars.githubusercontent.com/u/2?v=4"
                githuburl="https://api.github.com/users/defunkt" />
            <PropsComponents title="pjhyett"
                avatar="https://avatars.githubusercontent.com/u/3?v=4"
                githuburl="https://api.github.com/users/pjhyett" /> */}
            {
                data.map(meraData => {
                    return <>
                        <PropsComponents
                            // title={meraData.title}
                            // avatar={meraData.avatar}
                            // githuburl={meraData.githuburl}
                            // or
                            {...meraData}//spread operator
                        />
                    </>
                })
            }
        </div>
    )


};

//1st-Method
// export function PropsComponents(props) {
//     console.log(props.koibhi);
//     return (

//         <div className='w-[300px]'>
//             <img src={props.avatar} alt="" className='w-full' />
//             <h1 className='text-2xl font-semibold'>{props.title}</h1>
//             <a className='underline text-blue-600' target="blank" href={props.githuburl}>Profile</a>
//         </div>

//     )
// }
// 2nd - Method
// export function PropsComponents(props) {
//     const { title, avatar, githuburl } = props;
//     console.log(props.koibhi);
//     return (

//         <div className='w-[300px]'>
//             <img src={avatar} alt="" className='w-full' />
//             <h1 className='text-2xl font-semibold'>{title}</h1>
//             <a className='underline text-blue-600' target="blank" href={githuburl}>Profile</a>
//         </div>

//     )
// }
// 3rd - Method
export function PropsComponents({ title, avatar, githuburl }) {
    // console.log(props.koibhi);
    return (

        <div className='w-[300px]' style={{ background: "#22e4f2", padding: "5px" }}>
            <img src={avatar} alt="" className='w-full' />
            <h1 className='text-3xl font-semibold text-center' style={{ color: "white", marginTop: "20px", }}>{title}</h1>
            <a className='underline text-#f26522-900 text-2xl block text-center' target="blank" href={githuburl}>Profile</a>
            <div className="discription text-center"> Reiciendis, saepe sint. Soluta nobis repellat, aliquid ipsum ex, blanditiis alias eius rerum modi possimus natus,</div>
        </div>
    )
}

