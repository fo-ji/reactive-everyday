import Link from 'next/link'

import { routes } from '@/routes'

export const Navigation = () => {
  return (
    <div className='mt-6 border-b border-placeholder text-4xl'>
      <ul className='-mb-px flex justify-around'>
        {routes.map((route, idx) => (
          <li key={idx}>
            {idx === 0 ? (
              <Link href={route.path}>
                <a className='inline-block border-b-4 border-link p-4 text-link'>{route.name}</a>
              </Link>
            ) : (
              <Link href={route.path}>
                <a className='inline-block p-4'>{route.name}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
