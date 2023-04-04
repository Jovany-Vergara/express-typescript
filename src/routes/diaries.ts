import express from 'express'
import * as diaryService from '../service/diaryService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.post('/', (_req, res) => {
  res.send('Saving a diary')
})

export default router
