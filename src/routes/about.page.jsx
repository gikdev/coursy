import { CaretCircleRight } from "@phosphor-icons/react"
import config from "../config.json"

export default function About() {
  return (
    <article>
      <h1 className="text-4xl font-black mb-5">About Coursy:</h1>
      <p className="mb-8">
        Just a question before I tell you about it... <br />
        Have you ever been frustrated by the amount of video courses that are in your PC? <br />
        Are they disorganized and do you wish you'd have an app to manage all your courses? <br />
        Well now, there's a solution for your needs! <strong>Coursy</strong> is the all-in-one course management system.
        All you need to enjoy Coursy is to bookmark it to your taskbar or add to homepage and your good to go!
      </p>
      <h2 className="text-3xl font-bold mb-3">Why?</h2>
      <p className="mb-8">
        You may want to ask "why?". Why have I created this tool only to manage courses? Well to let you know, in my PC,
        I have 120GB of video tutorials! (which are all about programming! let alone others...!!!) <br />
        So it's kind of a pain to be forced to manage all of them on a paper, or in my mind! So I attempted to make this
        awesome tool (well I hope it'd be so)!
      </p>
      <h2 className="text-3xl font-bold mb-3">How to install it?</h2>
      <p className="mb-8">
        If you still don't know, I should tell you that this is a <strong>web app</strong>. So not installation needed!
        Just <strong>bookmark this page</strong> or <strong>add it to your homepage</strong> and you're all set!
      </p>
      <h2 className="text-3xl font-bold mb-3">What is this built with?</h2>
      <p className="mb-4">
        Coursy <code>(v{config.version})</code> is built by{" "}
        <a className="link link-primary" href="https://github.com/gikdev">
          GikDev
        </a>
        , is hosted on{" "}
        <a className="link link-primary" href="https://github.com/gikdev/coursy">
          GitHub
        </a>
        , and is built with:
      </p>
      <ul>
        {config.builtWith.map((item, i) => (
          <li className="flex items-center gap-1" key={i}>
            <CaretCircleRight size={20} color="currentColor" weight="duotone" />
            <a className="link link-primary" href={item.url}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </article>
  )
}
