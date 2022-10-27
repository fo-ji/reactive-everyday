import { NextPage } from 'next'

import { Link } from '@/components/Elements/Link'
import { ContentLayout } from '@/components/Layout'

const About: NextPage = () => {
  return (
    <ContentLayout>
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
            2022年10月現在、フロントエンドエンジニアとして2社に所属。 React, TypeScriptが得意。
            <br />
            最近は個人開発をする際に壁に感じるAWS（インフラ周り）を勉強中。
            <br />
            あと、バックエンドはお仕事で約2年間Laravelを書いていたが、TypeScriptで書けるNest.jsが
            とても気になる。
            <br />
            書きたい。
            <br />
            <br />
            新卒から約8年間営業をしていたこともあって、チーム開発ではメンバー間の橋渡し役が多い。
            <br />
            それもあって、若手中心のプロジェクトではフロントエンドのテックリードを任せてもらった経験も。
          </p>
        </div>
        <h2>
          <span>Output</span>
        </h2>
        <div>
          <Link
            href='https://github.com/fo-ji'
            passHref
            target='_blank'
            className='inline-block border-b border-link text-link hover:opacity-40'
          >
            GitHub
          </Link>
        </div>
      </div>
    </ContentLayout>
  )
}

export default About
