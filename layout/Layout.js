import React from 'react'

const Layout = (props) => {
  return (
    <>
      <h1>Layout</h1>
      <main>
        {props.children}
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
