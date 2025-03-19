import { useQuery } from "@tanstack/react-query"
import { Idea } from "../../models/ideas"
import { fetchIdeas } from "../api/ideas"

export default function useGetIdeas(limit: number) {
  return useQuery({
    queryKey: ['ideas'],
    queryFn: async () => {
      const res: Idea[] = await fetchIdeas(limit)
      return res
    },
  })
}
