import type { Language } from "../types/language"
import { api } from "./api"

export const LanguageService = {
  async getAll() {
    const {data } = await api.get<Language[]>('/languages')
    return data
  }
}