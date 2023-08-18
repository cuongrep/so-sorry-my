import { navigate } from "gatsby"
import React, { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    navigate('/fadeHeart.html');
  }, [])

  return (
    <></>
  )
}
