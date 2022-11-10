import {useRouter} from 'next/router'

export default function RoutingPage () {
    const router = useRouter()
    console.log(router)

    const onClickRoutedPush = () => {
        router.push('/02_routed')
    }
    return (
        <>
            <button onClick={onClickRoutedPush}>라우팅 버튼</button>
        </>   
    )
}