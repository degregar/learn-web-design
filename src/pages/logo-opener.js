import React from "react"
import { Link } from "gatsby"

import "./logo-opener.scss"

import EmptyLayout from "../layouts/empty-layout"
import SplitTextToSpan from "../components/SplitTextToSpan"

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
      <h2 className="each-letter-fade-in-up-rotated" style={{"--initial-delay": "1.4s"}}>
        <SplitTextToSpan text="Twoja strona to" />
      </h2>
      <h1 className="each-letter-fade-in-up-rotated" style={{"--initial-delay": "2.8s"}}>
        <SplitTextToSpan text="TWOJA TWIERDZA" />
      </h1>
    </section>
  </EmptyLayout>
)

export default LogoOpenerPage
