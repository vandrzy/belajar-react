import React, { useEffect, useState } from "react";

type Props = { //props untuk mengirim data dari parent ke child component
  name: string
}

type UserProps = {
  name: string,
  age: number,
  location?: string
}
type LoginProps = {
  isLogin: boolean,
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

type User ={
  username: string,
  password: string
}

type Fruit = {
  id: number,
  name: string
}

const fruits: Fruit[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
];


// const [isLogin, setIsLogin] = useState<boolean>(false) // use state tidak boleh global

const HelloName = ({name}: Props) => { // functional component 
  return (
    <h2>hello {name}</h2>
  )
}

const ShowIdentity = ({name, age, location = "dimana rumahnya"}: UserProps) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{location}</li>
      </ul>
    </div>
  )
}

const CounterButton = () => {
  const [count, setCount] = useState<number>(0); //useState

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count -1)}>kurang</button>
      <button onClick={() => setCount(count+1)}>tambah</button>
    </div>
  )
}

const LoginState = () => {
  const [user, setUser] = useState<User>({username: "",password: ""});

  return (
    <div>
      <input type="text" onChange={(e) => setUser({...user, username: e.target.value})} />

      <h2>hello {user.username}</h2>
    </div>
  )
}



const Greeting = ({isLogin}: {isLogin: boolean} ) => { //conditional rendering
  let message;
  if (isLogin) {
    message = <h1>Welcome back!</h1>;
  } else {
    message = <h1>Please sign in.</h1>;
  }

  return <div>{message}</div>;
};

const LoginButton = ({isLogin, setIsLogin}: LoginProps) => {
  
  useEffect(() => {
    console.log('status login berubah');
  }, [isLogin])
  return (

    <div>
      {!isLogin && <button onClick={() => setIsLogin(true)}>login</button>}
      {isLogin && <button onClick={() => setIsLogin(false)}>logout</button>}
    </div>
  )
}

const ShowFruit = () => {
  return (
    <ul>
      {fruits.map((fruit) => {
        return <li key={fruit.id}>{fruit.name}</li>
      })}
    </ul>
  )
}

type Image = {
  url: string
}

const FetchApi = () => {
  const [images, setImages]= useState<Image[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.waifu.im/images");
      const data = await response.json();
      
      const url = data.items.map((item: {url: string}) => ({url: item.url}))
      setImages(url)
    }
    fetchData();
  }, [])

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image.url} alt=""  width="200"/>
      ))}
    </div>
  )
}

const App = () => {

  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <div>
      <h1>Hello world</h1>
      <HelloName name="kuda"/>
      <ShowIdentity name='kida' age={20}/>
      <CounterButton/>
      <LoginState />
      <Greeting  isLogin={isLogin}/>
      <LoginButton isLogin={isLogin} setIsLogin={setIsLogin}/> 
      <ShowFruit />
      <FetchApi />
    </div>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

export default App
