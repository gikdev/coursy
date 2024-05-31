import { Routes, Route } from "react-router-dom"
import Nav from "./components/nav.component"
import Home from "./routes/home.page"
import About from "./routes/about.page"
import Profile from "./routes/profile.page"
import Settings from "./routes/settings.page"

const Sign = () => <h1>Sign In / Sign Up</h1>
const E404 = () => <h1>Not found 404</h1>

export default function App() {
  return (
    <Routes>
      <Route path="/coursy" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<E404 />} />
      </Route>
    </Routes>
  )
}
