import { useQuery } from "@tanstack/react-query"
import { LanguageService } from "../services/language.service"

export const useLanguages = () => {
 return useQuery({
    queryKey: ['languages'],
    queryFn: async () => await LanguageService.getAll(),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours   
 })
}