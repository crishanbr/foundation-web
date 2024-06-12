'use client' // Error components must be Client Components

import { ErrorPage } from '@/components/widgets/NotFound';

export default function NotFound() {
  return (
    <ErrorPage label="404" href="/" />
  )
}