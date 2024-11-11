import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Homepage(){
    return(
        <main className="flex-1">
        <section className="w-full py-12 px-[5%] md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Hi, I'm Dhanush
                </h1>
                <p className="mx-auto max-w-full text-gray-500 md:text-xl dark:text-gray-400">
                "Welcome to my website! I’m a Computer Science engineering student passionate about technology, coding, and innovation. Here, I share insights, projects, and resources on my journey in the world of CSE. Dive in and explore!"
                </p>
              </div>
              <div className="space-x-4">
                <Button className="hover:bg-red-600" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button className="hover:text-red-600" variant="outline" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container w-full px-4 md:px-6">
            <h2 className="text-3xl  font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="w-full  inline-block mt-4 text-gray-500 md:text-xl dark:text-gray-400">
            "Hello! I'm Dhanush S.,an engineering student specializing in IoT within Computer Science at Sathyabama Institute of Science and Technology. I’m passionate about exploring the latest in web development, app development, generative AI, and IoT projects. Here, I share my projects and thoughts on emerging tech. Thanks for visiting!"
            </p>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">My Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3,4,5,6].map((i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <Image
                      alt={`Project ${i}`}
                      className="object-cover w-full h-60 rounded-lg"
                      height="240"
                      src={`/placeholder.svg?height=240&width=360`}
                      style={{
                        aspectRatio: "360/240",
                        objectFit: "cover",
                      }}
                      width="360"
                    />
                    <h3 className="mt-4 text-xl font-bold">Project {i}</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      A brief description of project {i} and its key features.
                    </p>
                    <Button className="mt-4 hover:text-red-600" variant="outline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="mt-6 flex space-x-4">
              <Button className="hover:text-red-600" variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
              <Button className="hover:text-red-600" variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button className="hover:text-red-600" variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
        </section>
      </main>
    )
}