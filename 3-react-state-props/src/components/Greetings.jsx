
import SubGreeting from './SubGreeting'; // Greeting is parent 


const SubGreetingV2 = () => {
    return (
        <p>I am please to have you in my class V2</p>
    )
}

// const Greetings = (props) => { // child
//     return (
//         <div className='greeting'>
//             <h1>Welcome, {props.name}</h1>
//             <h2>{props.greeting}</h2>
//             <SubGreeting />
//             <SubGreetingV2 />
//         </div>
//     )
// }

const Greetings = ({name, greeting}) => { // child
    return (
        <div className='greeting'>
            <h1>Welcome, {name}</h1>
            <h2>{greeting}</h2>
            {/* <SubGreeting />
            <SubGreetingV2 /> */}
        </div>
    )
}

export default Greetings;