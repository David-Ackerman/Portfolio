import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function Home() {
  return (
    <main>
      <section className='bg-black py-28 px-20 grid grid-cols-2 gap-6'>
        <div className='flex flex-col leading-5 gap-2 '>
          <h2 className='text-4xl'>David Ackerman</h2>
          <h4 className='text-lg text-zinc-300'>
            System Analist at{" "}
            <a className='underline' href='https://www.alelo.com.br/'>
              Alelo🇧🇷
            </a>
          </h4>
          <p className='text-zinc-600'>
            Sharing everything I know about Web Development. <br /> <br /> Let's
            talk about Developer Experience, Web Performance, and UI
            engineering.
          </p>
          <div className='flex items-center gap-4 mt-2'>
            <a
              className='cursor-pointer'
              href='https://github.com/david-ackerman'
            >
              <GithubLogo size={30} weight='fill' />
            </a>
            <a
              className='cursor-pointer'
              href='https://www.linkedin.com/in/david-dos-santos-28125a186/'
            >
              <LinkedinLogo size={30} weight='fill' />
            </a>
          </div>
        </div>
        <div>My picture</div>
      </section>
      <div className='h-[3000px]'>a</div>
    </main>
  );
}
