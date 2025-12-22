const STORAGE_KEY = 'misa_candidates'

export const getCandidatesFromStorage = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Error reading from localStorage:', error)
    return []
  }
}

export const saveCandidatesToStorage = (candidates) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(candidates))
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
}

export const addCandidateToStorage = (candidate) => {
  const candidates = getCandidatesFromStorage()
  const newCandidate = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    ...candidate,
  }
  candidates.unshift(newCandidate)
  saveCandidatesToStorage(candidates)
  return newCandidate
}

export const updateCandidateInStorage = (id, updatedData) => {
  const candidates = getCandidatesFromStorage()
  const index = candidates.findIndex((c) => c.id === id)
  if (index !== -1) {
    candidates[index] = { ...candidates[index], ...updatedData }
    saveCandidatesToStorage(candidates)
  }
}

export const deleteCandidateFromStorage = (id) => {
  const candidates = getCandidatesFromStorage()
  const filtered = candidates.filter((c) => c.id !== id)
  saveCandidatesToStorage(filtered)
}

export const clearCandidatesStorage = () => {
  localStorage.removeItem(STORAGE_KEY)
}
