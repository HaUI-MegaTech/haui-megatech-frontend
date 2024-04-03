'use client'
import Button from 'react-bootstrap/Button';
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    return (
        <>
            this is admin page
            <button onClick={() => router.push("/")}>Back home</button>
            <Button variant="primary">Primary</Button>
        </>
    )
}

export default Header;