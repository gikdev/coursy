import { PlusCircle } from "@phosphor-icons/react"
import Table from "../components/table.component"
import courses from "../data.json"

export default function Home() {
  const totalPrice = courses.reduce((acc, cur) => acc + cur.price, 0)
  const totalInternet = courses.reduce((acc, cur) => acc + cur.internet, 0)

  return (
    <>
      <header className="flex justify-center items-center flex-col gap-5 mb-10 sm:gap-20 sm:flex-row">
        <h1 className="w-full text-4xl font-black sm:text-start text-center">Courses 🎥</h1>
        <button className="btn btn-primary gap-1">
          <PlusCircle size={20} color="#281a1a" weight="duotone" />
          <span>New Course</span>
        </button>
      </header>
      <Table courses={courses} totalPrice={totalPrice} totalInternet={totalInternet} />
    </>
  )
}
