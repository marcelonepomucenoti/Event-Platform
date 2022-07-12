import { gql, useQuery } from "@apollo/client"
import { client } from "./lib/apolo"
import { Event } from "./Pages/Event"

export function App() {
  return (
    <div>
      <Event />
    </div>
  )
}