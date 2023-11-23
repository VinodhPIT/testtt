import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>Post: ww</p>
}


export async function getServerSideProps(context) {
console.log(context ,'cdcdc')
  return {
    props: {
      locale: '',
    },
  };
}

 