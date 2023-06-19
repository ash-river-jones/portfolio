import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Ash Jones</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool
              title="13” MacBook Pro, M1, 8GB RAM (2020)"
              href="https://www.apple.com/ca/macbook-pro-13/"
            >
              This is a beast of a laptop that runs on Apple’s own M1 chip. It
              has a crazy long battery life, a gorgeous Retina display, and a
              sleek design. It can handle any software development task with
              speed and efficiency.
            </Tool>
            <Tool
              title="Samsung 32” M8 Smart UHD Monitor"
              href="https://www.samsung.com/ca/monitors/flat/smart-m8-m80c-32-inch-uhd-4k-smart-tv-apps-ls32cm801unxza/"
            >
              This is a huge and immersive monitor that offers 4K resolution,
              HDR10+ support, and smart TV features. It has a thin bezel, a
              tilting stand, and built-in speakers. It is perfect for
              multitasking, gaming, and watching videos.
            </Tool>
            <Tool
              title="Logitech MX Keys Mini"
              href="https://www.logitech.com/en-ca/products/keyboards/mx-keys-s.920-010388.html"
            >
              This is a compact and wireless keyboard that has backlit keys, a
              rechargeable battery, and a multi-device pairing capability. It
              has a comfy and responsive typing experience, and it works
              seamlessly with the Logitech MX Master 3S mouse.
            </Tool>
            <Tool
              title="Logitech MX Master 3S"
              href="https://www.logitech.com/en-ca/products/mice/mx-master-3s.910-006557.html"
            >
              This is a premium and ergonomic mouse that has a fast and precise
              scroll wheel, a customizable thumb wheel, and a gesture button. It
              has a long-lasting battery, a wireless charging pad, and a
              multi-device pairing capability. It works seamlessly with the
              Logitech MX Keys Mini keyboard.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool
              title="Visual Studio Code"
              href="https://code.visualstudio.com/"
            >
              This is my favorite and versatile code editor that supports
              multiple languages, extensions, debugging, testing, and version
              control. It has a user-friendly interface, a built-in terminal,
              and a live share feature. It is fast, lightweight, and
              customizable.
            </Tool>
            <Tool title="macOS Terminal">
              This is the default command-line interface for macOS that lets me
              do all kinds of things using text commands. It has a simple and
              elegant design, a powerful scripting language, and a rich set of
              utilities. It is easy to use, flexible, and secure.
            </Tool>
            <Tool
              title="MySQLWorkbench"
              href="https://dev.mysql.com/downloads/workbench/"
            >
              This is an awesome tool for working with MySQL databases. It lets
              me create, edit, query, administer, and visualize my data. It has
              a graphical user interface, a SQL editor, a data modeling tool,
              and a server administration tool. It is reliable, efficient, and
              user-friendly.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma" href="https://www.figma.com/">
              This is an amazing and cloud-based design platform that lets me
              create, prototype, and share my designs. It has a vector-based
              editor, a plugin system, an asset library, and a feedback system.
              It is compatible with various file formats and devices. It is
              intuitive, innovative, and fun to use.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool
              title="One Sec"
              href="https://apps.apple.com/ca/app/one-sec-delay-apps-focus/id1532875441"
            >
              This is a genius and simple app that keeps me from getting
              distracted by all the shiny things on my phone. It makes me wait
              for one second before opening any app, which is enough time to
              make me think twice if I really need it. It also shows me how much
              time I save by using One Sec, which is awesome.
            </Tool>
            <Tool title="Notion" href="https://www.notion.so/product">
              This is a super cool and flexible app that lets me do everything
              from taking notes to managing projects and more. It has so many
              features, templates, and integrations that I can customize it to
              fit my needs and style. It also supports markdown, databases, and
              web clipping, which is amazing.
            </Tool>
            <Tool title="Motion AI" href="https://www.usemotion.com/">
              This is a smart and friendly app that makes scheduling meetings a
              breeze. It connects to my calendar, email, and video conferencing
              tools and lets me create meeting links, set preferences, and
              automate reminders. It also respects my availability and blocks
              out time for deep work, which is great.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
