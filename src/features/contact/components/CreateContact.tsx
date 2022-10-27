export const CreateContact = () => {
  return (
    <div className='flex flex-col gap-6'>
      <label className='block'>
        <span className='text-placeholder'>Name</span>
        <input
          type='text'
          className='mt-1 block w-full rounded-md border-gray-300 text-paragraph shadow-sm placeholder:text-placeholder placeholder:text-opacity-50'
          placeholder='山田 太郎'
        />
      </label>
      <label className='block'>
        <span className='text-placeholder'>Email</span>
        <input
          type='email'
          className='mt-1 block w-full rounded-md border-gray-300 text-paragraph shadow-sm placeholder:text-placeholder placeholder:text-opacity-50'
          placeholder='taro@example.com'
        />
      </label>
      <label className='block'>
        <span className='text-placeholder'>Title</span>
        <input
          type='text'
          className='mt-1 block w-full rounded-md border-gray-300 text-paragraph shadow-sm placeholder:text-placeholder placeholder:text-opacity-50'
          placeholder='〇月〇日の記事について'
        />
      </label>
      <label className='block'>
        <span className='text-placeholder'>Message</span>
        <textarea
          className='mt-1 block w-full rounded-md border-gray-300 text-paragraph shadow-sm placeholder:text-placeholder placeholder:text-opacity-50'
          rows={3}
          placeholder='〇〇の記事の中で・・・'
        ></textarea>
      </label>
      <button
        className='rounded bg-main py-2 px-4 font-bold text-white hover:opacity-75'
        type='button'
      >
        Submit
      </button>
    </div>
  )
}
