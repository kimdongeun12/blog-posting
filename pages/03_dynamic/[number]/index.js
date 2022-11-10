import {useRouter} from 'next/router'

export default function RoutingPage () {
    const router = useRouter();

    console.log('================')
    console.log('router : ' , router)
    console.log('================')
    console.log('router.query.number : ' , router.query.number)
    console.log('================')

    return (
        <>
            <div>{'router.query.number:' + router.query.number}</div>
        </>   
    )
}