import { Link } from '@/components/elements/link'

export default function AboutPage() {
  return (
    <section className='px-4'>
      <div className='flex flex-col gap-8'>
        <h2>
          <span>Profile</span>
        </h2>
        <ul className='nbr-block-ul'>
          <li>おほじ | fo-ji</li>
          <li>Webエンジニア</li>
          <li>フリーランス</li>
        </ul>
        <h2>
          <span>Introduction</span>
        </h2>
        <div>
          <p>
            2022年11月現在、フロントエンドエンジニアとして2社に所属しています。
            <br />
            React/TypeScriptが得意ですが、お仕事で約2年間LaravelでAPIを作っていたり、今はpythonでLambdaを書いたりもしています。
            <br />
            最近はインフラ周りとTypeScriptで書けるNest.jsを勉強中。
            <br />
            新卒から約8年間営業をしていたこともあり、新しく入られたメンバーのサポート役を任せてもらうことが多いです。
            <br />
            それもあって、現在進行形の若手、副業者中心のプロジェクトではフロントエンドのテックリードを任せてもらっています。
          </p>
        </div>
        <h2>
          <span>Output</span>
        </h2>
        <ul className='space-y-2'>
          <li>
            <Link
              href='https://github.com/fo-ji'
              passHref
              target='_blank'
              className='inline-block border-b border-link text-link hover:opacity-40'
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href='https://twitter.com/fo_ji80440'
              passHref
              target='_blank'
              className='inline-block border-b border-link text-link hover:opacity-40'
            >
              X
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
