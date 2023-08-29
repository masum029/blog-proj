import { cookies } from 'next/headers';

export default function Page() {
  const cookie = cookies.get('Authorization');

  if (cookie) {
    const token = cookie.value;

    const newHeaders = {
      'Authorization': 'Bearer ' + token,
    };

    return NextResponse.next(newHeaders);
  } else {
    return (
      <div>
        The Authorization header is not set.
      </div>
    );
  }
}