// src/models/Restaurant.ts
export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string // Ex: "Italiana", "Japonesa"
  avaliacao: number
  descricao: string
  capa: string // URL da imagem de capa
}