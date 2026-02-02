import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('req', req)
  return res.status(200).json({
    title: 'Next.js + TypeScript Example',
    description: 'Typescript description',
    keywords: 'typescript, nextjs, reactjs',
  })
}
