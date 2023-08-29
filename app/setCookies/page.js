
 
import { cookies } from 'next/headers'
 
export default function SetCookie() {




async function create(data) {
  // cookies().set('name', 'lee')
  // // or
  // cookies().set('name', 'lee', { secure: true })
  // // or
  cookies().set({
    theme: 'dark',
    language: 'Bangla',
  })

  
}

return (
  <div>
    The cookie has been set.
  </div>
);

}