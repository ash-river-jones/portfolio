import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ash Jones</title>
        <meta
          name="description"
          content="I’m Ash Jones. I live in Vancouver BC, where I build the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Ash Jones. I live in Vancouver BC, where I build the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hi there! I'm Ash Jones, a passionate software developer and
                aspiring engineer. I find joy in crafting digital solutions that
                positively impact people's lives. With a background in freelance
                projects and valuable experience as a Software Developer Intern
                at BrainStation, I have the skills and knowledge to tackle
                complex challenges.
              </p>
              <p>
                As a developer, I have honed my expertise in various
                technologies, including React and Next.js, for building dynamic
                and interactive web applications. I am proficient in using
                Tailwind CSS to create beautiful, responsive user interfaces.
                Additionally, I have experience working with TypeScript,
                MongoDB, MySQL, and Express.js, enabling me to develop robust
                and scalable applications.
              </p>
              <p>
                One of the projects I'm particularly proud of is creating a
                website for a therapist specializing in supporting the queer
                community in rural Saskatchewan. It was a rewarding experience
                to leverage my technical skills to create a platform that
                promotes inclusivity and accessibility in mental health
                services.
              </p>
              <p>
                As a software developer, my ultimate goal is to leverage
                technology to support individuals in need and contribute to the
                betterment of society. I am driven by the desire to build
                meaningful solutions that address real-world challenges. By
                gathering valuable experience and continuously expanding my
                skill set, I aim to make a lasting impact through my work.
              </p>
              <p>
                When I'm not coding, I often explore my diverse interests and
                hobbies. I find solace in cooking, experimenting with flavours
                and creating culinary delights. I also love spending time in
                nature, going on hikes that allow me to connect with the world
                around me. Additionally, I find inspiration in queer art and
                joy, celebrating the unique expressions of creativity and
                identity.{' '}
                <em>
                  <a
                    className="text-teal-500 dark:text-teal-400"
                    href="https://open.spotify.com/playlist/37i9dQZF1DX4OzrY981I1W?si=1625a97630eb42fc"
                  >
                    Indie music
                  </a>
                </em>{' '}
                and{' '}
                <em>
                  <a
                    className="text-teal-500 dark:text-teal-400"
                    href="https://open.spotify.com/playlist/74sUjcvpGfdOvCHvgzNEDO?si=a3b50a8697484101"
                  >
                    lo-fi beats
                  </a>
                </em>{' '}
                are the soundtracks to my coding adventures, fueling my
                imagination and driving my productivity.
              </p>
              <p>
                Thank you for joining me on this journey. Let's connect and
                create something remarkable together.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/ash_river_jones"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/ash.river.jones/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/ash-river-jones"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/ash-river-jones/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:hello@ashjones.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hello@ashjones.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
