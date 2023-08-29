import { redirect } from 'next/navigation'

export default async function GET(req,res) {
    redirect('/readCookies')
}


