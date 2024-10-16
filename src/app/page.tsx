import Link from 'next/link';


 function Home() {
  console.log('home page')

  return (
    <div>
      <Link href='/About'>About</Link>
      <Link href='/contact'>contact</Link>
      <h1>hello world</h1>
      <h1>next.js</h1>
    </div>
  )
}
export default Home

 


//saturday class 2
//home,about,contact
//parent element hona zaroori hai.eik element i return kerta hai agr multipe banana hai to parent element lazmi hona chaiye
//app directiory
//page.tsx file home page under eik component hota hai or us main export defult ho raha hoga
//name change nhi hona chahiye hamesha page.tsx i hoga .404 means page not found










