import express from 'express'
import * as diaryService from '../service/diaryService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (_req, res) => {
  res.send('Saving a diary')
})

export default router
