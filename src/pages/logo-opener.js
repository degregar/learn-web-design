import React from "react"
import { Link } from "gatsby"

import "./logo-opener.scss"

import EmptyLayout from "../layouts/empty-layout"

const LogoOpenerPage = () => (
  <EmptyLayout>
    <div className="overlay">
      <div className="line">
        <svg
          width="1644"
          height="1148"
          viewBox="0 0 1644 1148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 734.5L302.5 1144.5L763.5 390L1336 855.5L1642 1"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
    <section>
      <h2>Twoja strona to</h2>
      <h1 className="each-letter-fade-in-up-rotated">
        <span>T</span><span>W</span><span>O</span><span>J</span><span>A</span><span>&nbsp;</span><span>T</span><span>W</span><span>I</span><span>E</span><span>R</span><span>D</span><span>Z</span><span>A</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
        reiciendis aliquid quia non voluptatem sapiente at, dicta commodi illum
        nostrum.
      </p>
    </section>
  </EmptyLayout>
)

export default LogoOpenerPage
