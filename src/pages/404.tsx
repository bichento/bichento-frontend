import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

const NotFoundPage = () => {
  const route = useRouter()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      route.push('/')
    }, 3000)
  }, [route])

  const handleHomeClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  return (
    <div>
      <h1>404</h1>
      <h2>Not found</h2>
      <p>Redirecting to <Link href="/" onClick={handleHomeClick}>home</Link> page...</p>
    </div>
  )
}

export default NotFoundPage
