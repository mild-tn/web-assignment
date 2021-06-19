import api from "../lib/api"

export const apiTcas = {
  getTcasData: async () => {
    const response = await api.get('tmp/mock_tcaster_api.json')
    return response
  },
}